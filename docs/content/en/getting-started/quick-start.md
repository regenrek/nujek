---
title: Quick start
description: ''
category: Getting started
position: 2
---

## Install

First, install @nujek modules and its dependencies

```bash
yarn add -D @nujek/ui @nujek/storyblok @nuxtjs/composition-api @nuxtjs/tailwindcss
```

## Module Setup

Add `@nujek modules` to your `nuxt.config.js` file

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
    '@nuxtjs/composition-api',
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

## Styles

Optionally but recommend you can add the nujek css styles to your project.


```js[nuxt.config.js]
{
  css: ['@nujek/ui/css/nujek-ui.css']
}
```