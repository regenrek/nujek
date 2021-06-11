---
title: Manual installation
description: ''
category: Installation
position: 11
---

## Install

First, install a new nuxt project with *TailwindCSS* (Check TailwindCSS in cli install) included. Here are the options we recommend to choose from

```bash
npx create-nuxt-app my-website
```

After that, nstall @nujek modules and its dependencies

```bash
yarn add -D @nujek/ui @nujek/storyblok @nuxtjs/composition-api
```

## Module Setup

Add @nujek modules to your `nuxt.config.js` file

```js[nuxt.config.js]
const storyblokConfig = {
    accessToken: '<Storyblok access token>',
    defaultLanguage: 'en',
    cacheProvider: 'memory',
    version: 'auto',
    disableManagementApi: true
}

export default {
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/tailwindcss',
    '@nujek/ui',
    [
      '@nujek/storyblok', { storyblokConfig, debug: true }
    ]
  ],
}
```

<alert>
In <code>development</code> mode set <code>debug: true</code> for <code>@nujek/storyblok</code> module. Debugging allows you to get a visual representation of all available bloks from storyblok.
</alert>

## Vuex Store Setup

<alert>If you don't need navigation states skip this part and set <code>[storeTemplates.nav](/guides/options#storetemplatesnav) </code> to <code>false</code></alert>

Since mostly every website has a navigation we add a `nav.js` store file which handles navigation states correctly and works with our [<NjNav>](/nujek-ui/nj-nav) component out of the box. 

**Important:** Add a new file `index.js` to the `store/` directory to avoid an error on running the dev server.

```
my-project/
 -- components/
 -- pages/
 -- plugins/
 -- store/
   -- index.js <- add this file
```

## Theming Setup

<alert>If you don't plan to use any global theming you can skip this part</alert>

We we're searching for a reasonable way to style components globally. So we adapt vue-tailwinds theme system approach. To use global styling for components add a `nujek-ui.js` file in `plugins/` folder.

```
my-project/
 -- components/
 -- pages/
 -- plugins/
   -- nujek-ui.js <- add this file
 -- store/
```

```js[plugins/nujek-ui.js]
import Vue from 'vue'
import Nujek from '~nujek/ui/plugin'
import { NjSection } from '~nujek-ui/components'

const settings = {
  // your settings
}

Vue.use(Nujek, settings)
```

Since `nujek-ui.js` is a plugin file you need to activate it in your config file

```[nuxt.config.js]
{
  plugins: [{ src: '~/plugins/nujek-ui.js' }],
}
```


Read more about Theming comoponents in [Theme Guide](/guides/theme)