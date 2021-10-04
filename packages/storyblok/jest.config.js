module.exports = {
  preset: '@nuxt/test-utils',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!@nujek)'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/runtime/plugin.js'
  ],
  moduleNameMapper: {
    '~nujek-ui/(.*)': '<rootDir>/src/runtime/$1',
    '~nujek-ui': '<rootDir>/src/runtime/index.ts',
    '~/(.*)': '<rootDir>/src/$1'
  }
}
