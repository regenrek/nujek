import nujekBundleModule from '../../src/module'

module.exports = {
  // this is necessary for test only.
  components: [
    '~/components', { path: '../../../../node_modules/@blokwise/blok/src/components', prefix: '', pathPrefix: false }
  ],
  buildModules: [
    nujekBundleModule
  ]
}
