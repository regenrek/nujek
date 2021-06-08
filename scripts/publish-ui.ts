import { execSync } from 'child_process'
import path from 'path'
import consola from 'consola'
import { activePackages, PackageManifest } from './packages'

const nujekui: PackageManifest = activePackages.find((p) => {
  return p.name === 'ui'
})

console.log('nujek ui', nujekui)

execSync('npx bump patch --preid rc', {
  stdio: 'inherit',
  cwd: path.join('packages', nujekui.name)
})
execSync('npm publish --access public', {
  stdio: 'inherit',
  cwd: path.join('packages', nujekui.name)
})
consola.success(`Package Published: @nujek/${nujekui.name}`)
