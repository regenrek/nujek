import { execSync } from 'child_process'
import path from 'path'
import { activePackages } from './packages'
import consola from 'consola'

for (const { name } of activePackages) {
  execSync('npx bump patch --preid rc', {
    stdio: 'inherit',
    cwd: path.join('packages', name)
  })
  execSync('npm publish --access public', {
    stdio: 'inherit',
    cwd: path.join('packages', name)
  })
  consola.success(`Package Published: @nujek/${name}`)
}
