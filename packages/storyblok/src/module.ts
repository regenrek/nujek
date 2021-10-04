import { resolve, join } from 'path'
import consola from 'consola'
import defu from 'defu'

import type { Module } from '@nuxt/types'

const storyblokModule: Module<any> = async function storyblokModule (moduleOptions) {
  const defaults: any = {
    storyblokConfig: {
      accessToken: '',
      cacheProvider: 'memory'
    },
    withConsole: false,
    debug: false
  }

  const { nuxt, requireModule, addPlugin } = this
  const options: any = defu(moduleOptions, nuxt.options.nujekStoryblok, defaults)
  const logger = consola.withScope('@nujek/storyblok')
  const ROOT_DIR = 'nujek'

  // Transpile and alias runtime
  const runtimeDir = resolve(__dirname, 'runtime')
  nuxt.options.alias['~nujek-storyblok'] = runtimeDir
  nuxt.options.build.transpile.push(runtimeDir, '@nujek/storyblok')

  /**
   * add storyblok-nuxt module
   */
  if (options.storyblokConfig) {
    await requireModule(['storyblok-nuxt', options.storyblokConfig])

    if (options.withConsole) {
      logger.success({
        message: 'Storyblok modules ready',
        additional: 'Module \'@nujek/storyblok-nuxt\' registered.',
        badge: true
      })
    }
  } else {
    logger.warn('Storyblok API Configuration is empty')
  }

  addPlugin({
    src: resolve(runtimeDir, 'plugin.js'),
    fileName: join(ROOT_DIR, 'storyblok-nujek.js'),
    options: { debug: options.debug }
  })

  nuxt.hook('components:dirs', (dirs: any) => {
    // remove default ~/components (if exists) autoload and replace
    // it with prefix "" and pathPrefix false option.
    const index = dirs.indexOf('~/components')
    if (index > -1) {
      dirs.splice(index, 1)
    }

    dirs.push({
      path: resolve(runtimeDir, 'components'),
      prefix: '',
      pathPrefix: false
    }, {
      path: '~/components',
      prefix: '',
      pathPrefix: false
    })

    if (options.withConsole) {
      logger.success({
        message: '@nujek/storyblok',
        additional: `storyblok components loaded ${resolve(runtimeDir, 'components')} and ~/components with {prefix: '', pathPrefix: false}`,
        badge: true
      })
    }
  })
}

export default storyblokModule

// eslint-disable-next-line
// @ts-ignore
storyblokModule.meta = require('../package.json')
