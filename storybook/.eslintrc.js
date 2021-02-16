module.exports = {
  root: true,
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn'],
    'node/no-callback-literal': ['warn']
  }
}
