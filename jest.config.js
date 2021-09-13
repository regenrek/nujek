module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/ui/dist/**/*.{js,vue}',
    '!**/node_modules/**'
  ],
  coverageReporters: [
    'html',
    'text-summary'
  ]

  //   moduleNameMapper: {
  //     '^~/(.*)$': '<rootDir>/$1',
  //     '^~~/(.*)$': '<rootDir>/$1',
  //     '^@/(.*)$': '<rootDir>/$1',
  //     vue$: 'vue/dist/vue.esm.js'

//   },
//   moduleFileExtensions: ['js', 'vue'],
//   transform: {
//     '^.+\\.js$': 'babel-jest',
//     '.*\\.(vue)$': 'vue-jest'
//   },
//   testEnvironment: 'jest-environment-node',
//   // testRegex: '/test/',
//   collectCoverage: true,
//   collectCoverageFrom: [
//     '<rootDir>/components/**/*.vue',
//     '<rootDir>/pages/**/*.vue'
//   ],
//   snapshotSerializers: [
//     'jest-serializer-vue'
//   ],
//   globals: {
//     'vue-jest': {
//       babelConfig: true
//     }
//   },
//   transformIgnorePatterns: ['/node_modules/(?!@nujek)']
}
