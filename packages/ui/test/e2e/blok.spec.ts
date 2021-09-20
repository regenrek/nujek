import { setupTest, createPage } from '@nuxt/test-utils'

describe('Blok', () => {
  setupTest({
    browser: true,
    rootDir: 'test/fixtures'
  })

  it('loads bloks dynamically', async () => {
    const page = await createPage('/')
    const html = await page.innerHTML('body')

    console.log(html)

    expect(html).toContain('This is totally foo!')
    expect(html).toContain('This is a bar')
    expect(html).toContain('This bar is somewhat different')
    expect(html).toContain('Another bar hanging with the cool kids')
  })

  it('handles scoped slotData correctly', async () => {
    const page = await createPage('/')
    const html = await page.innerHTML('body')

    expect(html).toContain('vue')
  })
})
