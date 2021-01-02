---
title: Quick start
description: ''
category: Getting started
position: 2
---

## Quick start

First, install @nujek modules and its recommend depencendy modules like

```bash
yarn add -D @nujek/core @nujek/ui @nujek/storyblok @nujek/shared @nuxtjs/composition-api @nuxtjs/tailwindcss
```

Add @nujek modules to your `nuxt.config.js` file

```
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
```

## External Deps

* @nuxtjs/composition-api -> [@marvr/storyblok-rich-text-vue-renderer](https://github.com/MarvinRudolph/storyblok-rich-text-renderer/tree/master/packages/storyblok-rich-text-vue-renderer) 
* @nuxtjs/tailwindcss -> @nujek/ui




