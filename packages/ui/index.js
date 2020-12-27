import { join, resolve } from 'path'
import consola from 'consola'

export default function ({ withConsole = false }) {
  const logger = consola.withScope('@nujek/ui')
  const ROOT_DIR = 'nujek'

  this.nuxt.hook('components:extend', (components) => {
    this.addTemplate({
      src: resolve(__dirname, 'store/nav.js'),
      fileName: join(ROOT_DIR, 'store/nav.js'),
      options: {}
    })

    this.addPlugin({
      src: join(__dirname, 'plugins/init-store.js'),
      fileName: join(ROOT_DIR, 'plugins/init-store.js'),
      options: {}
    })

    if (withConsole) {
      logger.success({
        message: '@nujek/ui',
        additional: `store initialzed ${resolve(
          __dirname,
          'plugins/init-store.js'
        )}`,
        badge: true
      })
    }

    this.addPlugin({
      src: join(__dirname, 'plugins/lazysizes.js'),
      fileName: join(ROOT_DIR, 'plugins/lazysizes.js'),
      options: {}
    })

    if (withConsole) {
      logger.success({
        message: '@nujek/ui',
        additional: `lazysizes initialzed ${resolve(
          __dirname,
          'plugins/lazysizes.js'
        )}`,
        badge: true
      })
    }
  })

  this.nuxt.hook('components:dirs', (dirs) => {
    // Add ./components dir to the list
    dirs.push({
      path: join(__dirname, 'components')
    })

    console.success({
      message: '@nujek/ui',
      additional: `ui components loaded ${join(__dirname, 'components')}`,
      badge: true
    })
  })
}
