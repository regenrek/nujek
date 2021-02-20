export default {
  components: [
    { path: '~/components/bloks', global: true, extensions: ['vue', 'js'] },
    {
      path: '../packages/ui/dist/runtime/components/bloks',
      global: true,
      extensions: ['vue', 'js']
    },
    '~/components'
  ],
  css: ['@nujek/ui/dist/nujek-ui.css'],
  storybook: {
    addons: ['@storybook/addon-storysource'],
    stories: [
      // '~/packages/ui/components/**/*.stories.js',
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
    ['@nujek/ui', { withConsole: true }],
    [
      '@nujek/storyblok',
      {
        storyblokConfig: {},
        withConsole: true,
        debug: true
      }
    ]
  ],
  modules: ['nuxt-client-init-module'],
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {}
      }
    }
  }
}
