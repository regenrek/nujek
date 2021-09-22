import nujekUiModule from '../../src/module'

module.exports = {
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/tailwindcss',
    '@nujek/storyblok',
    nujekUiModule
  ]
}
