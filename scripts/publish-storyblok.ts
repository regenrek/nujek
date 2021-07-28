import { execSync } from 'child_process'
import path from 'path'
import consola from 'consola'
import { activePackages, PackageManifest } from './packages'

const nujekstoryblok: PackageManifest = activePackages.find((p) => {
  return p.name === 'storyblok'
})

console.log('nujek storyblok', nujekstoryblok)

execSync('npx bump patch --preid rc', {
  stdio: 'inherit',
  cwd: path.join('packages', nujekstoryblok.name)
})
execSync('npm publish --access public', {
  stdio: 'inherit',
  cwd: path.join('packages', nujekstoryblok.name)
})
consola.success(`Package Published: @nujek/${nujekstoryblok.name}`)
