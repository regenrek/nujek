---
title: Manual installation
category: installation
position: 11
---

## Install

First, install a new nuxt project with **TailwindCSS** pre-installed.

```bash
npx create-nuxt-app my-website

? Project name: nujek-landingpage
? Programming language: JavaScript
? Package manager: Yarn
? UI framework: Tailwind CSS
? Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert se
lection)
? Linting tools: ESLint
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Static (Static/JAMStack hosting)
? Development tools: jsconfig.json (Recommended for VS Code if you're not using
typescript)
? Continuous integration: None
? Version control system: None
```

Install @nujek modules and its dependencies.

```bash
yarn add -D @nujek/ui @nujek/storyblok @nuxtjs/composition-api
```

## Storyblok Access Token 

To consume content from your Storyblok Project you will need to connect your Storyblok `API Key` to nujek. We do this safely via `.env` file and call this environment variable in `nuxt.config.js`.

Lets create an `.env` file in your project root directory and add the following line to it. 

If you need more info how to obtain the Access Token from Storyblok then read this [guide](/connect-storyblok)

```bash[.env]
SB_CLIENT_ACCESS_TOKEN=<your access token>
```

## Module Setup

Add @nujek modules to your `nuxt.config.js` file

```js[nuxt.config.js]
const storyblokConfig = {
    accessToken: process.env.SB_CLIENT_ACCESS_TOKEN, #  <- here we will use the SB Token from the .env file.
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
import Nujek from '~nujek-ui/plugin'
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
Read more about Theming components in [Theme Guide](/guides/theme)

## Add Tailwind Config

Create a `tailwind.config.js` in the root directory of the project 

```
// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```


Finished. Happy coding. 🎉