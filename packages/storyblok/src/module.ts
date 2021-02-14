import { join, resolve } from 'path'
import consola from 'consola'
import { toPascalCase } from '@nujek/shared'

import type { Module } from '@nuxt/types'

const storyblokModule: Module<any> = async function storyblokModule ({
  storyblokConfig = {},
  withConsole = false,
  enableStoryblokQueries = true,
  enableStoryblokNuxt = true,
  debug = false,
  storyblokQueries = {
    formatResponse: false
  }
}) {
  const { nuxt, addPlugin, requireModule } = this

  const logger = consola.withScope('@nujek/storyblok')
  const ROOT_DIR = 'nujek'

  // Transpile and alias runtime
  const runtimeDir = resolve(__dirname, 'runtime')
  nuxt.options.build.transpile.push(runtimeDir, '@nuxt/storyblok')

  if (!storyblokConfig) {
    logger.warn('Storyblok Configuration is empty')
  }

  /**
   * add storyblok-nuxt module
   */
  if (enableStoryblokNuxt) {
    await requireModule(['storyblok-nuxt', storyblokConfig])

    if (withConsole) {
      logger.success({
        message: 'Storyblok modules ready',
        additional: 'Module \'@nujek/storyblok-nuxt\' registered.',
        badge: true
      })
    }
  }

  /**
   * add nuxt-storyblok-queries
   */
  if (enableStoryblokQueries) {
    await requireModule([
      '@nujek/nuxt-storyblok-queries',
      {
        ...storyblokConfig,
        ...storyblokQueries
      }
    ])

    if (withConsole) {
      logger.success({
        message: 'Storyblok modules ready',
        additional: 'Module \'@nujek/nuxt-storyblok-queries\' registered.',
        badge: true
      })
    }
  }

  nuxt.hook('components:extend', (components) => {
    // Add Vue.filters
    addPlugin({
      src: resolve(runtimeDir, 'plugin.js'),
      fileName: join(ROOT_DIR, 'filters.js'),
      options: {}
    })

    if (withConsole) {
      logger.success({
        message: '@nujek/storyblok filters added'
      })
    }

    // Add rich text renderer
    addPlugin({
      src: resolve(runtimeDir, 'rich-text-renderer.js'),
      fileName: join(ROOT_DIR, 'rich-text-renderer.js'),
      options: {}
    })

    if (withConsole) {
      logger.success({
        message: '@nujek/storyblok - rich-text-renderer added'
      })
    }

    // grab all possible prefixes
    // @ts-ignore
    // eslint-disable-next-line
    const prefixes = [
      ...new Set(
        components
          .filter(c => !c.async)
          .map((c) => {
            const filename = c.filePath.split('\\').pop()
            const componentName = filename.replace('.vue', '')
            const re = new RegExp(`${toPascalCase(componentName)}$`)
            return c.pascalName.replace(re, '')
          })
      )
    ]

    addPlugin({
      src: resolve(runtimeDir, 'dynamic-bloks.js'),
      fileName: join(ROOT_DIR, 'dynamic-bloks.js'),
      options: { debug, prefixes }
    })

    if (withConsole) {
      logger.success({
        message: 'prefixes for debug mode added',
        additional: `items as dynamic components (with prefixes: ${prefixes
          .map(prefix => `'${prefix}'`)
          .join(', ')})`,
        badge: true
      })
    }
  })

  nuxt.hook('components:dirs', (dirs) => {
    // Add ./components dir to the list
    dirs.push({
      path: resolve(runtimeDir, '../components')
    })

    if (withConsole) {
      logger.success({
        message: '@nujek/storyblok - components initialized'
      })
    }
  })
}

export default storyblokModule

// eslint-disable-next-line
// @ts-ignore
storyblokModule.meta = require('../package.json')
