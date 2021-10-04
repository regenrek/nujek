import { setupTest, createPage } from '@nuxt/test-utils'

describe('Blok', () => {
  setupTest({
    browser: true,
    rootDir: 'test/fixtures',
    config: {
      nujekStoryblok: {
        withConsole: false
      }
    },
    setupTimeout: 120000
  })

  it('loads bloks dynamically', async () => {
    const page = await createPage('/')
    const html = await page.innerHTML('body')

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

describe('Blok Debug', () => {
  setupTest({
    browser: true,
    rootDir: 'test/fixtures',
    config: {
      nujekStoryblok: {
        withConsole: true,
        debug: true
      }
    },
    setupTimeout: 120000
  })
  it('loads bloks dynamically with debug blok', async () => {
    const page = await createPage('/debug')
    const html = await page.innerHTML('body')

    // check if component name exists
    expect(html).toContain('blok_image_2')
    expect(html).toContain('blokTextImage2')

    // check if props will be shown
    expect(html).toContain('BlokTextImage Title')
    expect(html).toContain('title_tag')

    expect(html).toContain('BlokImage Title')
    expect(html).toContain('image')
  })
})

describe('Blok Debug', () => {
  setupTest({
    browser: true,
    rootDir: 'test/fixtures',
    config: {
      nujekStoryblok: {
        withConsole: true
      },
      nujekUi: {
        withConsole: true
      },
      tailwindcss: {
        cssPath: '~/assets/tailwind.css'
      }
    },
    setupTimeout: 120000
  })

  const requests: string[] = []

  it('loads bloks dynamically with debug blok', async () => {
    await createPage('/')

    const positiveRequest = requests.find(request => request.match('/_ipx/s_300x200/2000px-Aconcagua2016.jpg'))
    expect(positiveRequest).toBeTruthy()
  })
})
