---
title: Quick start
description: ''
category: Getting started
position: 2
---

## Install

First, install @nujek modules and its recommend depencendy modules like

```bash
yarn add -D @nujek/core @nujek/ui @nujek/storyblok @nujek/shared @nuxtjs/composition-api @nuxtjs/tailwindcss
```

## Module Setup

Add @nujek modules to your `nuxt.config.js` file

```js[nuxt.config.js]
{
  buildModules: [
    '@nuxtjs/composition-api',
    '@nuxtjs/tailwindcss',
    '@nujek/core',
    ['@nujek/ui'],
    [
      '@nujek/storyblok',
      { storyblokConfig: storyblokConfig, debug: true }
    ]
  ],
}
```

<alert>
It's recommended to set <code>debug: true</code> for <code>@nujek/storyblok</code> module. Very helpful to see which component bloks needs implementation.
</alert>

## Styles

Optionally but recommend you can add the nujek css styles to your project.


```js[nuxt.config.js]
{
  css: ['@nujek/ui/css/nujek-ui.css']
}
```