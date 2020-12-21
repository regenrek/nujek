import { join, resolve } from 'path'
import consola from 'consola'

export default function ({ withConsole = false }) {
  const logger = consola.withScope('@nujek/ui')

  this.nuxt.hook('builder:extendPlugins', (plugins) => {
    plugins.push({
      ssr: true,
      src: resolve(__dirname, 'plugins', 'init-store.js')
    })
  })

  this.nuxt.hook('components:extend', (components) => {
    // this.addPlugin({
    //   src: resolve(__dirname, 'plugins/init-store.js'),
    //   options: {}
    // })

    console.success({
      message: '@nujek/ui',
      additional: `store initialzed ${resolve(
        __dirname,
        'plugins/init-store.js'
      )}`,
      badge: true
    })
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
