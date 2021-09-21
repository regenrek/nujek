import { setupTest, createPage, url } from '@nuxt/test-utils'
import type { Page } from 'playwright'

describe('browser (ssr:true)', () => {
  jest.setTimeout(60000)

  setupTest({
    browser: true,
    rootDir: 'test/fixtures'
  })
  let page: Page

  //   const requests: string[] = []

  test('should start', async () => {
    page = await createPage()
    // page.route('**', (route) => {
    //   requests.push(route.request().url())
    //   return route.continue()
    // })
    page.goto(url('/'))
    const body = await page.innerHTML('body')
    expect(body).toContain('Todo')
  })
})
