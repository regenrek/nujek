import consola from 'consola'

export default function ({ withConsole = false }) {
  const logger = consola.withScope('@nujek/core')

  // This hooks is called only for `nuxt dev` and `nuxt build` commands
  this.nuxt.hook('build:before', () => {})
}
