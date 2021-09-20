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
    }
  })

  it('injects module @nuxtjs/composition-api/module', () => {
    const buildModules = [{
      name: '@nuxtjs/composition-api/module',
      options: {}
    }, {
      name: '@nuxtjs/tailwindcss',
      options: {}
    }, {
      name: '@nujek/storyblok',
      options: {}
    }, {
      name: '@nujek/ui',
      options: {}
    }]

    for (const module of buildModules) {
      expectModuleToBeCalledWith('requireModule', module.name, module.options)
    }
  })

  it('injects module @blokwise/blok', () => {
    expectModuleToBeCalledWith('requireModule', '@blokwise/blok', {
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
