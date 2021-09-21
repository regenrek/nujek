import { setupTest, createPage } from '@nuxt/test-utils'

describe('Blok', () => {
  setupTest({
    browser: true,
    rootDir: 'test/fixtures',
    config: {
      nujekStoryblok: {
        withConsole: true
      }
    },
    setupTimeout: 120000
  })

  it('loads bloks dynamically', async () => {
    const page = await createPage('/')
    const html = await page.innerHTML('body')

    // textimage blok

    // title
    expect(html).toContain('BlokTextImage Title')

    // image blok
    expect(html).toContain('https://example.jpg')
    expect(html).toContain('BlokImage Title')

    // Landingpage
    expect(html).toContain('https://example.com/x.jpg')
    expect(html).toContain('Landingpage Title')
  })

  it('handles scoped slotData correctly', async () => {
    const page = await createPage('/')
    const html = await page.innerHTML('body')

    expect(html).toContain('parentCategory')
  })
})
