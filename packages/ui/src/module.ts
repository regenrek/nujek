import { join, resolve } from 'path'
import consola from 'consola'

import type { Module } from '@nuxt/types'

const uiModule: Module<any> = function uiModule ({
  addDefaultPostCssPlugins = true,
  enableLazySizesPlugin = true,
  withConsole = false,
  storeTemplates = {
    nav: true
  }
}) {
  const logger = consola.withScope('@nujek/ui')
  const ROOT_DIR = 'nujek'

  this.nuxt.hook('components:extend', () => {
    if (addDefaultPostCssPlugins) {
      // Fix issue with postCSS that needs process.env.NODE_ENV
      /* istanbul ignore if */
      if (!this.nuxt.options.dev && !process.env.NODE_ENV) {
        process.env.NODE_ENV = 'production'
      }

      /*
       ** Set PostCSS config
       */
      const { postcss } = this.nuxt.options.build

      postcss.preset.stage = 1 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-features
      postcss.plugins = postcss.plugins || {}

      /* istanbul ignore if */
      if (Array.isArray(postcss.plugins)) {
        logger.error(
          'Array syntax for postcss plugins is not supported with v3. Please use the object syntax: https://nuxtjs.org/guides/configuration-glossary/configuration-build#postcss'
        )
      } else if (typeof postcss.plugins === 'object') {
        postcss.plugins['postcss-import'] = {}
        postcss.plugins['postcss-mixins'] = {}
        postcss.plugins['postcss-nested'] = {}
        postcss.plugins['postcss-hexrgba'] = {}
      }
    }

    if (storeTemplates.nav) {
      this.addTemplate({
        src: resolve(__dirname, '../templates', 'nav.js'),
        fileName: join(ROOT_DIR, 'nav.js'),
        options: {}
      })

      this.addPlugin({
        src: join(__dirname, '../templates', 'init-store.js'),
        fileName: join(ROOT_DIR, 'init-store.js'),
        options: {}
      })

      if (withConsole) {
        logger.success({
          message: '@nujek/ui',
          additional: `store initialzed ${resolve(__dirname, 'init-store.js')}`,
          badge: true
        })
      }
    }

    if (enableLazySizesPlugin) {
      this.addPlugin({
        src: join(__dirname, '../templates', 'lazysizes.js'),
        fileName: join(ROOT_DIR, 'lazysizes.js'),
        options: {}
      })

      if (withConsole) {
        logger.success({
          message: '@nujek/ui',
          additional: `lazysizes initialzed ${resolve(
            __dirname,
            'lazysizes.js'
          )}`,
          badge: true
        })
      }
    }
  })

  this.nuxt.hook('components:dirs', (dirs) => {
    // Add ./components dir to the list
    dirs.push({
      path: join(__dirname, '../components')
    })

    console.log({
      message: '@nujek/ui',
      additional: `ui components loaded ${join(__dirname, 'components')}`,
      badge: true
    })
  })
}

export default uiModule

// eslint-disable-next-line
// @ts-ignore
uiModule.meta = require('../package.json')
