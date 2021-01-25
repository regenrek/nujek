import { join, resolve } from 'path'
import consola from 'consola'
import { toPascalCase } from '@nujek/shared'

export default async function ({
  storyblokConfig = {},
  withConsole = false,
  enableStoryblokRouter = false,
  enableStoryblokQueries = true,
  enableStoryblokNuxt = true,
  debug = false
}) {
  const logger = consola.withScope('@nujek/storyblok')

  // await this.requireModule('@nujek/core', { withConsole })

  if (!storyblokConfig) {
    logger.warn('Storyblok Configuration is empty')
  }

  if (enableStoryblokNuxt) {
    await this.requireModule(['storyblok-nuxt', storyblokConfig])
    logger.success({
      message: 'Storyblok modules ready',
      additional: `Module '@nujek/storyblok-nuxt' registered.`,
      badge: true
    })
  }

  if (enableStoryblokRouter) {
    await this.requireModule([
      '@wearewondrous/nuxt-storyblok-router',
      storyblokConfig
    ])
    logger.success({
      message: 'Storyblok modules ready',
      additional: `Module '@nujek/nuxt-storyblok-router' registered.`,
      badge: true
    })
  }

  if (enableStoryblokQueries) {
    await this.requireModule(['@nujek/nuxt-storyblok-queries', storyblokConfig])
    logger.success({
      message: 'Storyblok modules ready',
      additional: `Module '@nujek/nuxt-storyblok-queries' registered.`,
      badge: true
    })
  }

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

    this.addPlugin({
      src: resolve(__dirname, 'plugins/dynamic-bloks.js'),
      options: { debug, prefixes }
    })

    if (withConsole) {
      logger.success({
        message: 'prefixes for debug mode added',
        additional: `items as dynamic components (with prefixes: ${prefixes
          .map((prefix) => `'${prefix}'`)
          .join(', ')})`,
        badge: true
      })
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
