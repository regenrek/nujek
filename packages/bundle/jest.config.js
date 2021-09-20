module.exports = {
  preset: '@nuxt/test-utils',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!@blokwise)'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}'
  ],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1'
  }
}
