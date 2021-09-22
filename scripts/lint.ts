import { execSync } from 'child_process'
import path from 'path'
import consola from 'consola'
import { activePackages } from './packages'

run()

function run () {
  for (const { name } of activePackages) {
    execSync('yarn lint', {
      stdio: 'inherit',
      cwd: path.join('packages', name)
    })

    consola.success(`Package linted: @nujek/${name}`)
  }
}

export { run as lint }
