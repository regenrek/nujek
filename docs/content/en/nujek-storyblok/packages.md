---
title: Packages
description: ''
category: Nujek Storyblok
position: 4
---

The `@nujek/storyblok` packages will install some useful nuxt modules to quickstart your project. This will help your development workflow.

## storyblok-nuxt

* Default: `enabled`
* Package: [`storyblok-nuxt`](https://github.com/storyblok/storyblok-nuxt)


This is the official storyblok nuxt.js module to connect your app with storyblok cms.

## @nujek/nuxt-storyblok-queries

* Default: `enabled`
* Package: [`@nujek/nuxt-storyblok-queries`](https://github.com/regenrek/nuxt-storyblok-queries)

**Hint**: This is a slightly modified version of nuxt-storyblok-queries module which has more features and support for storyblok management api

```vue[pages/LandingPage.js]
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

## @wearewondrous/nuxt-storyblok-router

<alert type="warning">
Deprecated. We decided to remove nuxt-storyblok-router.
</alert>


* Default: `disabled`
* Package: [`@wearewondrous/nuxt-storyblok-router`](https://github.com/wearewondrous/nuxt-storyblok-router)

Nuxt.js module to use storyblok routes and content-types instead of classic `pages/` directory

<alert>
While this module is perfect for simple websites it will
take away some flexibility for complex/custom routes. So we decided to disable storyblok router for default. (Maybe even removed in future releases)
</alert>

```bash
- pages/
-- LandingPage.vue # Storyblok `LandingPage` content type
```

## @marvr/storyblok-rich-text-vue-renderer

Vue.js plugin for rendering the rich-text content.

```vue
// @nujek/ui/components/atoms/SbRichtext
<SbRichtext v-if="content" :text="content" class="prose lg:prose-lg" />
```

**Component**: [`<SbRichtext/>`](/nujek-ui/components)

**Package:** [`@marvr/storyblok-rich-text-vue-renderer`](https://github.com/MarvinRudolph/storyblok-rich-text-renderer/tree/master/packages/storyblok-rich-text-vue-renderer)

**Docs:** [`rich-text-renderer Nuxtjs`](https://storyblok-rich-text-renderer.netlify.app/vue-plugin/usage/#with-nuxt-js)
