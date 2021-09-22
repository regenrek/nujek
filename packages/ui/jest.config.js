module.exports = {
  preset: '@nuxt/test-utils',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}'
  ],
  moduleNameMapper: {
    '~nujek-ui/(.*)': '<rootDir>/src/runtime/$1',
    '~nujek-ui': '<rootDir>/src/runtime/index.ts',
    '~/(.*)': '<rootDir>/src/$1'
  }
}
