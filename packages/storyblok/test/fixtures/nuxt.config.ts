import nujekStoryblokModule from '../../src/module'

module.exports = {
  components: true,
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/tailwindcss',
    nujekStoryblokModule
  ]
}
