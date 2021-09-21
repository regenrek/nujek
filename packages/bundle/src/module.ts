import defu from 'defu'

import type { Module } from '@nuxt/types'

const nujekBundleModule: Module<any> = async function storyblokModule (moduleOptions) {
  const defaults: any = {
    nujekStoryblok: {},
    nujekUi: {},
    tailwindcss: {},
    withConsole: false
  }

  const { nuxt, requireModule } = this
  const options: any = defu(moduleOptions, nuxt.options.nujekStoryblok, defaults)

  await requireModule('@nuxtjs/composition-api/module')
  await requireModule('@nuxtjs/tailwindcss', options.tailwindcss)
  await requireModule('@nujek/storyblok', options.nujekStoryblok)
  await requireModule('@nujek/ui', options.nujekUi)
}

export default nujekBundleModule

// eslint-disable-next-line
// @ts-ignore
nujekBundleModule.meta = require('../package.json')
