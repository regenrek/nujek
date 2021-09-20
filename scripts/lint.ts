import { execSync } from 'child_process'
import path from 'path'
import consola from 'consola'
import { activePackages } from './packages'

const args = process.argv.slice(2)
run()

function run() {
    for (const { name } of activePackages) {
        execSync(`pnpm lint`, {
            stdio: 'inherit',
            cwd: path.join('packages', name)
        })
    }
}

export { run as lint }