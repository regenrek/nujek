import { execSync } from 'child_process'
import path from 'path'
import consola from 'consola'
import { activePackages } from './packages'

const args = process.argv.slice(2)

for (const { name } of activePackages) {
    // specific
    if (args.includes(name)) {
        releasePackage(name)  
    }
    
    // all
    if (args.length === 0) {
        releasePackage(name)
    }
}

function releasePackage(name) {
    execSync(`bumpp patch --commit --push --tag nujek-${name}@`, {
        stdio: 'inherit',
        cwd: path.join('packages', name)
    })

    execSync('pnpm publish', {
        stdio: 'inherit',
        cwd: path.join('packages', name)
    })

    consola.success(`Package Published: @nujek/${name}`)
}