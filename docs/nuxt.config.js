import theme from '@nuxt/content-theme-docs'
import { storyblokConfig } from './config'

export default theme({
  css: ['../../../../assets/css/main.css'],
  generate: {
    routes: ['/'],
    exclude: ['/example', '/fixture']
  },
  plugins: [
    { src: '../../../../plugins/nujek-ui.js' }
  ],
  components: true,
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/tailwindcss',
    ['@nujek/ui', { withConsole: true, autoloadComponents: false }],
    [
      '@nujek/storyblok', { storyblokConfig, debug: true }
    ]
  ],
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  },
  content: {
    liveEdit: false
  }
})
