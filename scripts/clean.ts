import { execSync } from 'child_process'
import path from 'path'
import consola from 'consola'
import { activePackages } from './packages'

for (const { name } of activePackages) {
  execSync('pnpm clean')

  // build
  execSync('rm -rf node_modules', {
    stdio: 'inherit'
  })

  execSync(`rm -rf packages/${name}/node_modules`, {
    stdio: 'inherit',
    cwd: path.join('packages', name)
  })

  execSync(`rm -rf packages/${name}/yarn.lock`, {
    stdio: 'inherit',
    cwd: path.join('packages', name)
  })
}

consola.success('Packages cleared')
