---
title: Packages
description: ''
category: Nujek Storyblok
position: 1
---


## [`storyblok-nuxt`](https://github.com/storyblok/storyblok-nuxt)

This is the official storyblok nuxt.js module to connect your app with storyblok cms.

## [`@wearewondrous/nuxt-storyblok-queries`](https://github.com/regenrek/nuxt-storyblok-queries)

**Hint**: This is a slightly modified version of the official nuxt-storyblok-queries module which has more features and support for storyblok management api

```vue
// pages/LandingPage.vue

<template>
  <!-- Your template -->
</template>

<script>
export default {
  async asyncData({ $storyblok }) {
    const story = await $storyblok.getCurrentStory()

    return {
      story
    }
  }
}
</script>
```

## [`@wearewondrous/nuxt-storyblok-router`](https://github.com/wearewondrous/nuxt-storyblok-router)

Nuxt.js module to use storyblok routes and content-types instead of classic `pages/` directory

```bash
- pages/
-- LandingPage.vue # Storyblok `LandingPage` content type
```

## [`@marvr/storyblok-rich-text-vue-renderer`](https://github.com/MarvinRudolph/storyblok-rich-text-renderer/tree/master/packages/storyblok-rich-text-vue-renderer)

Vue.js plugin for rendering the rich-text content.

```vue
// @nujek/ui/components/atoms/SbRichtext
<SbRichtext
  v-if="content"
  :text="content"
  class="prose lg:prose-lg"
/>
```

**Docs:** https://storyblok-rich-text-renderer.netlify.app/vue-plugin/usage/#with-nuxt-js