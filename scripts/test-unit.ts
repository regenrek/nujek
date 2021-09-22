import { execSync } from 'child_process'
import path from 'path'
import { activePackages } from './packages'

run()

function run () {
  for (const { name, tests } of activePackages) {
    if (tests) {
      execSync('yarn test:unit', {
        stdio: 'inherit',
        cwd: path.join('packages', name)
      })
    }
  }
}

export { run as testUnit }
