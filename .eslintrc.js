module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended'
  ],
  globals: {
    $nuxt: true,
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true
  },
  plugins: ['nuxt', 'vue', 'prettier'],
  rules: {
    'new-cap': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/component-name-in-template-casing': ['off', 'PascalCase'],
    'vue/component-definition-name-casing': ['off'],
    'vue/attribute-hyphenation': ['warn'],
    'vue/no-unused-components': ['warn'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'no-unused-vars': ['warn'],
    eqeqeq: ['warn'],
    'no-lonely-if': ['warn'],
    'require-await': ['warn'],
    'handle-callback-err': ['warn'],
    'vue/custom-event-name-casing': ['off']
  }
}
