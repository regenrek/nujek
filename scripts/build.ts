import assert from 'assert'
import { execSync as exec } from 'child_process'
import consola from 'consola'

assert(process.cwd() !== __dirname)

function build () {
  consola.info('Clean up')
  exec('yarn run clean', { stdio: 'inherit' })

  consola.info('Rollup')
  // exec('yarn run build:siroc', { stdio: 'inherit' })

  // exec('mkdist --src packages/ui/runtime --dist packages/ui/dist/runtime', { stdio: 'inherit' })
}

async function cli () {
  try {
    await build()
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

export { build }

if (require.main === module) { cli() }
