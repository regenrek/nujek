import { execSync } from 'child_process'
import path from 'path'
import consola from 'consola'
import { activePackages } from './packages'

run()

function run () {
  execSync('yarn clean', {
    stdio: 'inherit'
  })

  // build
  execSync('siroc build', {
    stdio: 'inherit'
  })

  for (const { name } of activePackages) {
    execSync('mkdist --src ./src/runtime --dist ./dist/runtime', {
      stdio: 'inherit',
      cwd: path.join('packages', name)
    })

    consola.success(`Package Built: @nujek/${name}`)
  }
}

export { run as build }
