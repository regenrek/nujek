---
title: Quick start
description: ''
category: Getting started
position: 2
---

## Quick start

### Install

First, install @nujek modules and its recommend depencendy modules like

```bash
yarn add -D @nujek/core @nujek/ui @nujek/storyblok @nujek/shared @nuxtjs/composition-api @nuxtjs/tailwindcss
```

### Module Setup

Add @nujek modules to your `nuxt.config.js` file

```js[nuxt.config.js]
{
  buildModules: [
    '@nuxtjs/composition-api',
    '@nuxtjs/tailwindcss',
    '@nujek/core',
    ['@nujek/ui', { withConsole: true }],
    [
      '@nujek/storyblok',
      { storyblokConfig: storyblokConfig, withConsole: true, debug: true }
    ]
  ],
}
```

### Styles

Optionally but recommend you can add the nujek css styles to your project.


```js[nuxt.config.js]
{
  css: ['@nujek/ui/css/nujek-ui.css']
}
```

## External Deps

* @nuxtjs/composition-api -> [@marvr/storyblok-rich-text-vue-renderer](https://github.com/MarvinRudolph/storyblok-rich-text-renderer/tree/master/packages/storyblok-rich-text-vue-renderer) 
* @nuxtjs/tailwindcss -> @nujek/ui




