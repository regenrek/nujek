import { execSync } from 'child_process'
import path from 'path'
import { activePackages } from './packages'

const args = process.argv.slice(2)
run()

function run() {
    for (const { name, tests } of activePackages) {
        if (tests) {
            execSync(`pnpm test:e2e`, {
                stdio: 'inherit',
                cwd: path.join('packages', name)
            })
        }
    }
}

export { run as testE2e }