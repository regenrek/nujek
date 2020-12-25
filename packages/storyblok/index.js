import { join, resolve } from 'path'
import consola from 'consola'
import { toPascalCase } from '@nujek/shared'

export default async function ({
  storyblokConfig = {},
  withConsole = false,
  disableAutoModuleLoad = false,
  debug = false
}) {
  const logger = consola.withScope('@nujek/storyblok')

  // await this.requireModule('@nujek/core', { withConsole })

  if (!disableAutoModuleLoad) {
    if (!storyblokConfig) {
      logger.warn('Storyblok Configuration is empty')
    }

    await this.requireModule(['storyblok-nuxt', storyblokConfig])
    await this.requireModule([
      '@wearewondrous/nuxt-storyblok-queries',
      storyblokConfig
    ])
    await this.requireModule([
      '@wearewondrous/nuxt-storyblok-router',
      storyblokConfig
    ])

    logger.success({
      message: 'Storyblok modules ready',
      additional: `Module storyblok-nuxt registered.\nModule '@wearewondrous/nuxt-storyblok-queries' registered.\nModule '@wearewondrous/nuxt-storyblok-router' registered.`,
      badge: true
    })
  }

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
    // Add rich text renderer
    this.addPlugin({
      src: resolve(__dirname, 'plugins/rich-text-renderer.js'),
      options: {}
    })

    if (withConsole) {
      logger.success({
        message: '@nujek/storyblok - rich-text-renderer added'
      })
    }

    if (debug) {
      // grab all possible prefixes
      const prefixes = [
        ...new Set(
          components
            .filter((c) => !c.async)
            .map((c) => {
              const filename = c.filePath.split('\\').pop()
              const componentName = filename.replace('.vue', '')
              const re = new RegExp(`${toPascalCase(componentName)}$`)
              return c.pascalName.replace(re, '')
            })
        )
      ]

      if (withConsole) {
        logger.success({
          message: 'prefixes for debug mode added',
          additional: `items as dynamic components (with prefixes: ${prefixes
            .map((prefix) => `'${prefix}'`)
            .join(', ')})`,
          badge: true
        })
      }
    }
  })

  this.nuxt.hook('components:dirs', (dirs) => {
    // Add ./components dir to the list
    dirs.push({
      path: join(__dirname, 'components')
    })

    if (withConsole) {
      logger.success({
        message: '@nujek/storyblok - components initialized'
      })
    }
  })
}
