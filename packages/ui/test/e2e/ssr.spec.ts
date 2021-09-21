import { setupTest, createPage } from '@nuxt/test-utils'

describe('browser (ssr:true)', () => {
  setupTest({
    browser: true,
    rootDir: 'test/fixtures',
    setupTimeout: 120000
  })

  test('should start', async () => {
    const page = await createPage('/')
    const html = await page.innerHTML('body')

    expect(html).toContain('Todo')
  })
})
