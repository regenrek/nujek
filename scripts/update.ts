import path from 'path'
import { activePackages, PackageManifest, packages } from './packages'
import { listFunctions } from './utils'
import fs from 'fs-extra'

interface VueUseFunction {
  name: string
  category?: string
  description?: string
  docs?: string
  depreacted?: boolean
}

interface PackageIndex {
  info: PackageManifest
  dir: string
  docs?: string
  categories: Record<string, VueUseFunction[]>
}

type PackageIndexes = Record<string, PackageIndex>

const storybookUrl =
  'https://nujek-storybook.vercel.app'
const srcDir = './packages'


function flatten(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    )
  }, [])
}

async function updateChecklist(indexes: PackageIndexes) {
  const filepath = '.github/PULL_REQUEST_TEMPLATE/checklist.md'
  let readme = await fs.readFile(filepath, 'utf-8')

  let list = ''

  for (const [pkg, { categories }] of Object.entries(indexes)) {
    const functions = flatten(Object.values(categories))

    functions.sort((a, b) => a.name.localeCompare(b.name))

    list += `### ${pkg} (${functions.length})\n`

    for (const { name } of functions) list += `  - [ ] ${name}\n`

    list += '\n'
  }

  readme = readme.replace(
    /<!--LIST_STARTS-->[\s\S]+?<!--LIST_ENDS-->/m,
    `<!--LIST_STARTS-->\n\n${list}<!--LIST_ENDS-->`
  )

  await fs.writeFile(filepath, readme, 'utf-8')
}

export async function updatePackageJSON() {
  const { version } = await fs.readJSON('package.json')

  for (const { name, description, author } of activePackages) {
    const packageDir = path.join(srcDir, name)
    const packageJSONPath = path.join(packageDir, 'package.json')
    const packageJSON = await fs.readJSON(packageJSONPath)

    packageJSON.version = version
    packageJSON.description = description || packageJSON.description
    packageJSON.author =
      author || 'Kevin Regenrek <https://github.com/regenrek>'
    packageJSON.bugs = {
      url: 'https://github.com/regenrek/nujek/issues'
    }
    packageJSON.homepage = 'https://github.com/regenrek/nujek#readme'


    if (typeof packageJSON.dependencies !== 'undefined') {
      for (const key of Object.keys(packageJSON.dependencies)) {
        if (key.startsWith('@nujek/')) packageJSON.dependencies[key] = version
      }
    }

    await fs.writeJSON(packageJSONPath, packageJSON, { spaces: 2 })
  }
}

async function run() {
  //const indexes = await readIndexes()

  //fs.writeJSON('indexes.json', indexes, { spaces: 2 })
  // await updatePackageJSON()
}

run()
