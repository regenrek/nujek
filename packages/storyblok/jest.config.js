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
    'src/**/*.{js,vue}',
    '!src/runtime/dynamic-bloks.js'
  ],
  moduleNameMapper: {
    '~nujek-ui/(.*)': '<rootDir>/src/runtime/$1',
    '~nujek-ui': '<rootDir>/src/runtime/index.ts',
    '~/(.*)': '<rootDir>/src/$1'
  }
}
