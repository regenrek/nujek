import { join, resolve } from 'path'
import consola from 'consola'

export default function ({ withConsole = false }) {
  const logger = consola.withScope('@nujek/core')
  const ROOT_DIR = 'nujek'

  // This hooks is called only for `nuxt dev` and `nuxt build` commands
  this.nuxt.hook('build:before', async () => {
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
      postcss.plugins[`postcss-import`] = {}
      postcss.plugins[`postcss-mixins`] = {}
      postcss.plugins[`postcss-nested`] = {}
      postcss.plugins[`postcss-hexrgba`] = {}
    }
  })

  this.nuxt.hook('components:extend', (components) => {
    // Add plugins
    this.addPlugin({
      src: join(__dirname, 'plugins/pageHelper.js'),
      fileName: join(ROOT_DIR, 'plugins/pageHelper.js'),
      options: {}
    })

    if (withConsole) {
      logger.success({
        message: '@nujek/ui',
        additional: `pageHelper initialzed ${resolve(
          __dirname,
          'plugins/pageHelper.js'
        )}`,
        badge: true
      })
    }

    // Add Vue.filters
    this.addPlugin({
      src: resolve(__dirname, 'filters/index.js'),
      options: {}
    })

    if (withConsole) {
      logger.success({
        message: '@nujek/core initialized'
      })
    }
  })
}
