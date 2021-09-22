import { setupTest, expectModuleToBeCalledWith } from '@nuxt/test-utils'

describe('module', () => {
  setupTest({
    rootDir: 'test/fixtures',
    server: true,
    config: {
      nujekStoryblok: {
        storyblokConfig: {
          accessToken: 'notexistant',
          cacheProvider: 'memory'
        }
      }
    },
    setupTimeout: 120000
  })

  it('injects module @nujek/blok', () => {
    expectModuleToBeCalledWith('requireModule', '@nujek/blok', {
      withConsole: false,
      prefix: ''
    })
  })

  it('injects module storyblok-nuxt', () => {
    expectModuleToBeCalledWith('requireModule', 'storyblok-nuxt', {
      accessToken: 'notexistant',
      cacheProvider: 'memory'
    })
  })
})
