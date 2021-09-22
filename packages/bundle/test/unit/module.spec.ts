import { join } from 'path'
import { setupTest, getNuxt } from '@nuxt/test-utils'

// describe('module with default options', () => {
//   setupTest({
//     rootDir: 'test/fixtures',
//     server: true,
//     setupTimeout: 120000
//   })

//   it('injects all modules', () => {
//     const buildModules = [{
//       name: '@nuxtjs/composition-api/module'
//     }, {
//       name: '@nuxtjs/tailwindcss',
//       options: {}
//     }, {
//       name: '@nujek/storyblok',
//       options: {}
//     }, {
//       name: '@nujek/ui',
//       options: {}
//     }]

//     for (const module of buildModules) {
//       if (module.options) {
//         expectModuleToBeCalledWith('requireModule', module.name, module.options)
//       } else {
//         expectModuleToBeCalledWith('requireModule', module.name)
//       }
//     }
//   })
// })

// describe('@nujek/ui with options', () => {
//   setupTest({
//     rootDir: 'test/fixtures',
//     server: true,
//     config: {
//       nujekUi: {
//         withConsole: true
//       }
//     }
//   })

//   it('injects module @nujek/ui', () => {
//     expectModuleToBeCalledWith('requireModule', '@nujek/ui', {
//       withConsole: true
//     })
//   })
// })

// describe('@nujek/storyblok with options', () => {
//   setupTest({
//     rootDir: 'test/fixtures',
//     server: true,
//     config: {
//       nujekStoryblok: {
//         storyblokConfig: {
//           accessToken: 'notexistant',
//           cacheProvider: 'memory'
//         }
//       }
//     }
//   })

//   it('injects module @nujek/storyblok', () => {
//     expectModuleToBeCalledWith('requireModule', '@nujek/storyblok', {
//       storyblokConfig: {
//         accessToken: 'notexistant',
//         cacheProvider: 'memory'
//       }
//     })
//   })
// })

// describe('withConsole override global', () => {
//   setupTest({
//     rootDir: 'test/fixtures',
//     server: true,
//     config: {
//       nujekStoryblok: {
//         withConsole: false
//       },
//       nujekUi: {
//         withConsole: true
//       },
//       withConsole: true
//     }
//   })

//   it('injects module storyblok-nuxt', () => {
//     const buildModules = [{
//       name: '@nujek/storyblok',
//       options: { withConsole: false }
//     }, {
//       name: '@nujek/ui',
//       options: { withConsole: true }
//     }]

//     for (const module of buildModules) {
//       expectModuleToBeCalledWith('requireModule', module.name, module.options)
//     }
//   })
// })

// describe('withConsole override global 2', () => {
//   setupTest({
//     rootDir: 'test/fixtures',
//     server: true,
//     config: {
//       nujekUi: {
//         withConsole: false
//       },
//       withConsole: true
//     }
//   })

//   it('injects module storyblok-nuxt', () => {
//     const buildModules = [{
//       name: '@nujek/storyblok',
//       options: { withConsole: true }
//     }, {
//       name: '@nujek/ui',
//       options: { withConsole: false }
//     }]

//     for (const module of buildModules) {
//       expectModuleToBeCalledWith('requireModule', module.name, module.options)
//     }
//   })
// })

describe('tailwindcss module', () => {
  setupTest({
    server: true,
    rootDir: 'test/fixtures',
    config: {
      tailwindcss: {
        cssPath: join(__dirname, 'fixture', 'assets', 'tailwindcss.css')
      },
      nujekUi: {
        nujekCss: false
      }
    }
  })

  test('include custom tailwind.css file in project css', () => {
    const nuxt = getNuxt()
    expect(nuxt.options.css).toHaveLength(1)
    expect(nuxt.options.css).toContain(nuxt.options.tailwindcss.cssPath)
  })
})
