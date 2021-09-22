import defu from 'defu'

import type { Module } from '@nuxt/types'

const nujekBundleModule: Module<any> = async function storyblokModule (moduleOptions) {
  const defaults: any = {
    nujekStoryblok: {},
    nujekUi: {},
    tailwindcss: {}
  }

  const { nuxt, requireModule } = this
  const options: any = defu(moduleOptions, { withConsole: !!nuxt.options.withConsole })
  const withConsole = { ...(options.withConsole ? { withConsole: options.withConsole } : null) }
  const nujekStoryblokOptions: any = defu(moduleOptions.nujekStoryblok, nuxt.options.nujekStoryblok, defaults.nujekStoryblok)
  const nujekUiOptions: any = defu(moduleOptions.nujekUi, nuxt.options.nujekUi, defaults.nujekUi)
  const tailwindcssOptions: any = defu(moduleOptions.tailwindcss, nuxt.options.tailwindcss, defaults.tailwindcss)

  await requireModule('@nuxtjs/composition-api/module')
  await requireModule('@nuxtjs/tailwindcss', tailwindcssOptions)
  await requireModule('@nujek/storyblok', defu(nujekStoryblokOptions, withConsole))
  await requireModule('@nujek/ui', defu(nujekUiOptions, withConsole))
}

export default nujekBundleModule

// eslint-disable-next-line
// @ts-ignore
nujekBundleModule.meta = require('../package.json')
