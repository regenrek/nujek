import { resolve } from 'path'
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

  const { nuxt, requireModule } = this
  const options: any = defu(moduleOptions, nuxt.options.nujekStoryblok, defaults)
  const logger = consola.withScope('@nujek/storyblok')

  // Transpile and alias runtime
  const runtimeDir = resolve(__dirname, 'runtime')
  nuxt.options.alias['~nujek-storyblok'] = runtimeDir
  nuxt.options.build.transpile.push(runtimeDir, '@nuxt/storyblok')

  nuxt.options.build.transpile.push('@nujek/blok')
  nuxt.options.build.transpile.push('@nujek/dynamic')

  await requireModule('@nujek/blok', { prefix: '', withConsole: options.withConsole, debug: options.debug })

  /**
   * add storyblok-nuxt module
   */
  if (options.storyblokConfig) {
    await requireModule('storyblok-nuxt', options.storyblokConfig)

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

  nuxt.hook('components:dirs', (dirs: any) => {
    // Add ./components dir to the list
    dirs.push({
      path: resolve(runtimeDir, 'components'),
      prefix: '',
      pathPrefix: false
    })

    if (options.withConsole) {
      logger.success({
        message: '@nujek/storyblok',
        additional: `storyblok components loaded ${resolve(runtimeDir, 'components')}`,
        badge: true
      })
    }
  })
}

export default storyblokModule

// eslint-disable-next-line
// @ts-ignore
storyblokModule.meta = require('../package.json')
