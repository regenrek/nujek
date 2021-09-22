import { resolve } from 'path'
import { setupTest, expectModuleToBeCalledWith, getNuxt } from '@nuxt/test-utils'

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

describe('tailwindcss module', () => {
  setupTest({
    server: true,
    rootDir: 'test/fixtures',
    config: {
      nujekUi: {
        nujekCss: false
      },
      tailwindcss: {
        exposeConfig: true,
        cssPath: resolve('test/fixtures/assets', 'tailwind.css')
      }
    }
  })

  test('include custom tailwind.css file in project css', () => {
    const nuxt = getNuxt()
    expect(nuxt.options.css).toHaveLength(1)
    expect(nuxt.options.css).toContain(nuxt.options.tailwindcss.cssPath)
  })
})
