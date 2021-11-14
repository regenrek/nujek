import { join, resolve } from 'path'
import consola from 'consola'
import defu from 'defu'

import type { Module } from '@nuxt/types'

const uiModule: Module<any> = function uiModule (moduleOptions) {
  const defaults: any = {
    withConsole: false,
    nujekCss: false,
    storeTemplates: {
      nav: false
    },
    autoloadComponents: true,
    enableSbUtils: true,
    enableLazySizesPlugin: false,
    enableRichTextRenderer: false
  }

  const { nuxt, addPlugin, addTemplate } = this
  const options: any = defu(moduleOptions, nuxt.options.nujekUi, defaults)
  const logger = consola.withScope('@nujek/ui')
  const ROOT_DIR = 'nujek'

  // Transpile and alias runtime
  const runtimeDir = resolve(__dirname, 'runtime')
  nuxt.options.alias['~nujek-ui'] = runtimeDir
  nuxt.options.build.transpile.push(runtimeDir, '@nujek/ui')

  nuxt.hook('build:before', () => {
    if (options.nujekCss) {
      options.css.unshift('@nujek/ui/dist/nujek-ui.css')
    }
  })

  if (options.storeTemplates.nav) {
    addTemplate({
      src: resolve(runtimeDir, 'nav.js'),
      fileName: join(ROOT_DIR, 'nav.js'),
      options: {}
    })

    addPlugin({
      src: resolve(runtimeDir, 'init-store.js'),
      fileName: join(ROOT_DIR, 'init-store.js'),
      options: {}
    })

    if (options.withConsole) {
      logger.success({
        message: '@nujek/ui',
        additional: `store initialzed ${resolve(__dirname, 'init-store.js')}`,
        badge: true
      })
    }
  }

  if (options.enableSbUtils) {
    addPlugin({
      src: resolve(runtimeDir, 'sbutils.js'),
      fileName: join(ROOT_DIR, 'sbutils.js'),
      options: {}
    })
  }

  if (options.enableLazySizesPlugin) {
    addPlugin({
      src: resolve(runtimeDir, 'lazysizes.js'),
      fileName: join(ROOT_DIR, 'lazysizes.js'),
      options: {}
    })

    if (options.withConsole) {
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

  if (options.autoloadComponents) {
    nuxt.hook('components:dirs', (dirs: any) => {
      // Add ./components dir to the list
      dirs.push({
        path: resolve(runtimeDir, 'components'),
        prefix: '',
        pathPrefix: false
      })

      if (options.withConsole) {
        logger.success({
          message: '@nujek/ui',
          additional: `ui components loaded ${resolve(runtimeDir, 'components')}`,
          badge: true
        })
      }
    })
  }

  // Add rich text renderer
  if (options.enableRichTextRenderer) {
    addPlugin({
      src: resolve(runtimeDir, 'rich-text-renderer.js'),
      fileName: join(ROOT_DIR, 'rich-text-renderer.js'),
      options: {}
    })
    nuxt.options.build.transpile.push('@marvr/storyblok-rich-text-vue-renderer')

    if (options.withConsole) {
      logger.success({
        message: '@nujek/ui',
        additional: 'rich-text-renderer added',
        badge: true
      })
    }
  }
}

export default uiModule

// eslint-disable-next-line
// @ts-ignore
uiModule.meta = require('../package.json')
