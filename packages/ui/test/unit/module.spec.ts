import { setupTest, expectModuleToBeCalledWith } from '@nuxt/test-utils'

describe('module', () => {
  setupTest({
    rootDir: 'test/fixtures',
    server: true
  })

  it('it should call a plugin', () => {
    expectModuleToBeCalledWith('addPlugin', {
      src: expect.stringContaining('runtime/sbutils.js'),
      fileName: 'nujek/sbutils.js',
      options: {}
    })
  })
})

describe('module with nav config', () => {
  setupTest({
    rootDir: 'test/fixtures',
    server: true,
    config: {
      nujekUi: {
        storeTemplates: {
          nav: true
        },
        enableLazySizesPlugin: true
      }
    }
  })

  it('plugins to be added', () => {
    const pluginsToSync = ['init-store.js', 'init-store.js', 'lazysizes.js']
    for (const plugin of pluginsToSync) {
      expectModuleToBeCalledWith('addPlugin', {
        src: expect.stringContaining('runtime/' + plugin),
        fileName: 'nujek/' + plugin,
        options: {}
      })
    }
  })
})
