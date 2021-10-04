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
        },
        debug: false
      }
    },
    setupTimeout: 120000
  })

  it('injects module storyblok-nuxt', () => {
    expectModuleToBeCalledWith('requireModule', ['storyblok-nuxt', {
      accessToken: 'notexistant',
      cacheProvider: 'memory'
    }])
  })
})
