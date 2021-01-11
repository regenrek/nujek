/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      aspectRatio: {
        '1/1': [1, 1],
        '16/9': [16, 9],
        '4/3': [4, 3],
        '3/4': [3, 4]
      },
      maxWidth: {
        container: '1400px'
      }
    }
  },
  variants: {},
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['./packages/ui/components/**/*.vue', 'nuxt.config.js']
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('./tailwind-plugins/aspect-ratio.js')()
  ]
}
