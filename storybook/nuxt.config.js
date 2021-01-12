import path from 'path'

export default {
  components: [
    { path: '~/components/bloks', global: true, extensions: ['vue', 'js'] },
    {
      path: '../packages/ui/components/bloks',
      global: true,
      extensions: ['vue', 'js']
    },
    '~/components'
  ],
  css: ['@nujek/ui/css/nujek-ui.css'],
  storybook: {
    addons: ['@storybook/addon-storysource'],
    stories: [
      //'~/packages/ui/components/**/*.stories.js',
      '~/stories/**/*.stories.js'
    ]
  },
  tailwindcss: {
    cssPath: '~/styles/tailwind.css'
  },
  plugins: [{ src: '~/plugins/nujek-ui.js' }],
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nujek/core',
    ['@nujek/ui', { withConsole: true }],
    [
      '@nujek/storyblok',
      {
        storyblokConfig: {},
        withConsole: true,
        enableStoryblokRouter: false,
        debug: true
      }
    ]
  ],
  modules: ['nuxt-client-init-module'],
  build: {
    transpile: ['@nujek/shared', '@nujek/ui'],
    postcss: {
      plugins: {
        'postcss-nested': {}
      }
    },
    extend(config) {
      // console.log('path', path.join(__dirname, '..', 'packages/ui/'))
      // config.resolve.alias['@ui'] = path.join(__dirname, '..', 'packages/ui/')
    }
  }
}
