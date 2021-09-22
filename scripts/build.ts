import { execSync } from 'child_process'
import path from 'path'
import consola from 'consola'
import { activePackages } from './packages'

const args = process.argv.slice(2)
run()

function run() {
  execSync('pnpm clean', {
    stdio: 'inherit'
  })

  for (const { name } of activePackages) {

    // build
    execSync(`siroc build`, {
      stdio: 'inherit'
    })

    execSync(`mkdist --src ./src/runtime --dist ./dist/runtime`, {
      stdio: 'inherit',
      cwd: path.join('packages', name)
    })

    consola.success(`Package Built: @nujek/${name}`)
  }
}

export { run as build }