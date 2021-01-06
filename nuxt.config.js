export default {
  components: false,
  // components: false,
  buildModules: ['@nuxtjs/tailwindcss'],
  storybook: {
    stories: ['~/packages/ui/components/**/*.stories.js']
  },
  tailwindcss: {
    cssPath: '~/storybook/styles/tailwind.css'
  },
  plugins: [{ src: '~/storybook/plugins/nujek-ui.js' }],
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {}
      }
    }
  }
}
