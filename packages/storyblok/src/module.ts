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

  nuxt.options.build.transpile.push('@blokwise/blok')
  nuxt.options.build.transpile.push('@blokwise/dynamic')

  await this.requireModule('@blokwise/blok', { prefix: '', withConsole: options.withConsole })

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
}

export default storyblokModule

// eslint-disable-next-line
// @ts-ignore
storyblokModule.meta = require('../package.json')
