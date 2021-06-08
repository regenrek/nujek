import { execSync } from 'child_process'
import path from 'path'
import consola from 'consola'
import { activePackages } from './packages'

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
