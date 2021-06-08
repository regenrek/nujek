module.exports = {
  theme: {
    extend: {
      aspectRatio: {
        '1/1': [1, 1],
        '16/9': [16, 9],
        '4/3': [4, 3],
        '3/4': [3, 4],
        '9/16': [9, 16]
      },
      colors: {
        primary: {
          50: '#fff5db',
          100: '#ffe4ae',
          200: '#fed27e',
          300: '#fcc04d',
          400: '#fcae1d',
          500: '#e29503',
          600: '#b07400',
          700: '#7f5300',
          800: '#4c3200',
          900: '#1d1000'
        }
      }
    }
  },
  plugins: [
    require('./tailwind-plugins/aspect-ratio.js')()
  ]
}
