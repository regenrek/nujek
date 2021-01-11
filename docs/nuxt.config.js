import theme from '@nuxt/content-theme-docs'

export default theme({
  css: ['~/assets/css/main.css'],
  generate: {
    routes: ['/'],
    exclude: ['/example', '/fixture']
  }
})
