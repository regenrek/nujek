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
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {}
      }
    }
  }
}
