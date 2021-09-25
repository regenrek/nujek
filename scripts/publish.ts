import { execSync } from 'child_process'
import path from 'path'
import consola from 'consola'
import { activePackages } from './packages'
import { build } from './build'

const args = process.argv.slice(2)
const releaseOnly = args.includes('--release-only')
run()

function releasePackage (name, releaseOnly) {
  execSync(`bumpp patch --commit --push --tag nujek-${name}@`, {
    stdio: 'inherit',
    cwd: path.join('packages', name)
  })

  if (!releaseOnly) {
    execSync('yarn publish --access public', {
      stdio: 'inherit',
      cwd: path.join('packages', name)
    })
  }

  consola.success(`Package Published: @nujek/${name}`)
}

function run () {
  build()

  for (const { name } of activePackages) {
    // specific
    if (args.includes(name)) {
      releasePackage(name, releaseOnly)
    }

    // all
    if (args.length === 0) {
      releasePackage(name, releaseOnly)
    }
  }
}

export { run as publish }
