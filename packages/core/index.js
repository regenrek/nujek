import { join, resolve } from 'path'
import consola from 'consola'

export default function ({ withConsole = false }) {
  const logger = consola.withScope('@nujek/core')

  this.nuxt.hook('builder:extendPlugins', (plugins) => {
    // const { dst } = this.addTemplate({
    //   src: resolve(__dirname, 'filters/index.js'),
    //   fileName: 'nujek-filters.js',
    //   options: {}
    // })
    //
    // plugins.push({
    //   ssr: true,
    //   src: resolve(this.options.buildDir, dst)
    // })
  })

  this.nuxt.hook('components:extend', (components) => {
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
