import { execSync } from 'child_process'
import path from 'path'
import { activePackages } from './packages'
import consola from 'consola'

// execSync('npm run build', { stdio: 'inherit' })

for (const { name } of activePackages) {
  execSync('npx beachball publish', {
    stdio: 'inherit',
    cwd: path.join('packages', name)
  })
  // execSync('npm publish --access public', {
  //   stdio: 'inherit',
  //   cwd: path.join('packages', name)
  // })
  consola.success(`Package Published: @nujek/${name}`)
}
