import { setupTest, createPage, url } from '@nuxt/test-utils'
import type { Page } from 'playwright'

describe('browser (ssr:true)', () => {
    setupTest({
        browser: true,
        rootDir: 'test/fixtures',
    })

    let page: Page
    const requests: string[] = []

    test('should start', async () => {
        page = await createPage()
        page.goto(url('/'))
        const body = await page.innerHTML('body')
        console.log(body)
        expect(body).toContain('Todo')
    })
})
