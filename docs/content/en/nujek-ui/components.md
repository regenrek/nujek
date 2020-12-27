---
title: Components
description: ''
category: Nujek Ui
position: 2
---

## bloks

Blok components are used for storyblok dynamic bloks functionality. If you define a blok component in storyblok it will magically search for a related component in this folder and display it. We're using the `@nuxtjs/components`[Dynamic Components](https://github.com/nuxt/components#dynamic-components) feature.


### `<BlokDebug>`

This component is used internally by `@nujek/storyblok` module. It shows the current storyblok blok response to help developers how to integrate it correctly.

**Note: used internally**

## atoms

### `<NjAspectRatio>`

**Props**

- `aspectRatio`
  - Type: `String`
  - Default: `'16/9'`
  - Values: `['1/1', '9/16', '4/3', '3/4']`

**Example**

```md
<NjAspectRatio :aspectRatio="16/9">
    <NjImage src="image" />
</NjAspectRatio>
```

**Tailwind Config**

```js
// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            aspectRatio: {
                '1/1': [1, 1],
                '16/9': [16, 9],
                '4/3': [4, 3],
                '3/4': [3, 4]
            }
        }
    },
    variants: {
        aspectRatio: ['responsive']
    },
    plugins: [
        require('./tailwind-plugins/aspect-ratio.js')()
    ]
}
```

### `<NjBurger>`

**Props**

**Example**

```md
<NjBurger />
```

### `<NjSection>`

**Props**

- `bgImage`
  - Type: `String`
  - Default: ``

- `maxWidth`
  - Type: `String`
  - Default: ``

- `position`
  - Type: `String`
  - Default: ``
  - Values: `['left', 'center', 'right']`

- `width`
  - Type: `String`
  - Default: ``
  - Values: `['content', 'boxed', 'full-width']`

- `spacingY`
  - Type: `Boolean`
  - Default: `false`
  - Desc: Adds default y spacing to Sections

**Example**

```md
<NjSection width="boxed" position="center">
    <h1>My Blog</h1>
    <p>Lorem ipsum dolor at simet...</p>
</NjSection>
```
**Tailwind Config**

```js
// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            maxWidth: {
                container: '1400px'
            }
        }
    }
}
```

### `<NjImage>`

**Hint:** If you want to show images from storyblok please use [`SbImage`](#sbimage)`. 

**Props**

- `src`
  - Type: `Object, String`
  - Default: `null`

- `disableLazyLoad`
  - Type: `Boolean`
  - Default: `false`

- `caption`
  - Type: `String`
  - Default: ``

- `copyright`
  - Type: `String`
  - Default: ``

- `aspectRatio`
  - Type: `String`
  - Default: ``
  - Uses [`NjAspectRatio`](#njaspectratio)

- `objectFit`
  - Type: `String`
  - Default: `cover`

- `usePlaceholder`
  - Type: `Boolean`
  - Default: `true`

- `placeholderImage`
  - Type: `String`
  - Default: ``

**Example**

```md
<NjBurger />
```

### `<SbImage>`

SbImage is used to handles images from storyblok api. It transforms images on the fly and gives you optimized output on the fly. 

**Note:** Using NjImage internally but with more features related to Storyblok image api.

**Props**

- `src`
  - Type: `Object`
  - Default: `null`

- `objectFit`
  - Type: `String`
  - Default: `cover`

- `effect`
  - Type: `String`
  - Default: ``

- `srcSets`
  - Type: `Array`
  - Default: `[720, 1440, 2160]`

- `aspectRatio`
  - Type: `String`
  - Default: `16/9`
  - Uses [`NjAspectRatio`](#njaspectratio)

- `aspectRatioMobile`
  - Type: `String`
  - Default: `16/9`
  - Uses [`NjAspectRatio`](#njaspectratio)

**Example**

```md
<SbImage :src="image" />
```


### `<SbRichtext>`

Renders storyblok richtext field with [storyblok-rich-text-vue-renderer](/nujek-storyblok/packages#marvrstoryblok-rich-text-vue-renderer)

**Props**

- `content`
  - Type: `Object`
  - Default: `null`

**Example**

```md
<SbRichtext :text="content" v-if="content" />
```


## molecules

### `<NjNav>`

**Props**

- `fixed`
  - Type: `Boolean`
  - Default: `true`

**Example**

The following example shows a custom `Nav.vue` component which uses `NjNav` to display a menu component which data is coming from storyblok.

```vue
 <NjNav :fixed="false">
    <template #burger-menu>
      <NjBurger class="burger" />
    </template>

    <template #logo>
      <div class="w-40 lg:w-48">
        <nuxt-link to="/" class="block">
          <img src="/svg/logo.svg" alt="logo" />
        </nuxt-link>
      </div>
    </template>

    <template #nav>
      <!-- main nav desktop -->
      <nav class="hidden lg:flex justify-center items-center nj-nav-height">
        <template v-for="nav_item in mainNavigation">
          <nuxt-link
            v-if="nav_item.link && nav_item.link.linktype === 'story'"
            :key="nav_item._uid"
            :to="`/${nav_item.link.cached_url}`"
            class="font-600 cursor-pointer transition-color duration-700 text-sm navbar-item mx-2 lg:mx-4 xl:mx-6 h-20 uppercase letter-space flex items-center"
            :class="navFontColor"
            exact-active-class="navbar-item--active"
          >
            {{ nav_item.name || 'Read more' }}
          </nuxt-link>
          <a
            v-else-if="nav_item.link && nav_item.link.linktype === 'url'"
            :key="nav_item._uid"
            :href="nav_item.link.url"
            class="cursor-pointer"
            >{{ nav_item.name || 'Read more' }}</a
          >
        </template>
      </nav>
    </template>
  </NjNav>
```

### `<NjSidebar>`

**Props**

- `width`
  - Type: `String`
  - Default: `300px`

- `show`
  - Type: `Boolean`
  - Default: `false`

**Example**


```vue
    <NjSidebar
      :width="'80%'"
      :show="navOpen"
      @close="closeSidebar"
      class="sidenav-gradient"
    >
      <template #header>
        <div class="flex items-center justify-between py-4 bg-brand-600 px-6">
          <NjBurger class="min-w-0 burger" @click="toggleSidebar" />
          <div class="">
            <img
              src="/svg/logo_white.svg"
              alt="Logo"
              class="w-48 nj-nav-height"
            />
          </div>
        </div>
      </template>
      <div class="px-6">
        <div class="flex justify-end pt-4 pb-8">
          <div class="nav-icos flex" />
        </div>
        <nav class="mb-8">
          <div
            v-for="nav_item in mobileNavigation"
            :key="nav_item._uid"
            class="mb-4"
          >
            <a
              v-if="nav_item.link.linktype === 'url'"
              href="getNavItemLink(nav_item)"
              target="_blank"
              class="relative inline-block hover:text-hre-red letter-space mb-2 text-h2 font-dmsans text-white"
              >{{ nav_item.name }}</a
            >
            <NjNavItem
              v-else
              :type="nav_item.link.linktype"
              :to="getNavItemLink(nav_item)"
              class="relative inline-block hover:text-hre-red letter-space mb-2 text-h2 font-dmsans text-white"
              @onClick="closeSidebar"
            >
              {{ nav_item.name }}
            </NjNavItem>
          </div>
        </nav>

        <!-- sub mobile -->
        <nav class="sidebar-items grid sm:grid-cols-2 w-full">
          <div
            v-for="nav_item in mobileSubNavigation"
            :key="nav_item._uid"
            class=""
          >
            <div class="pb-2">
              <a
                v-if="nav_item.link.linktype === 'url'"
                :href="getNavItemLink(nav_item)"
                target="_blank"
                class="relative inline mb-0 text-paragraph font-dmsans text-white text-opacity-75"
                >{{ nav_item.name }}</a
              >
              <NjNavItem
                v-else
                :type="nav_item.link.linktype"
                class="relative inline mb-0 text-paragraph font-dmsans text-white text-opacity-75"
                :to="getNavItemLink(nav_item)"
                @onClick="closeSidebar"
              >
                {{ nav_item.name }}
              </NjNavItem>
            </div>
          </div>
        </nav>
      </div>
    </NjSidebar>
```


### `<SbGrid>`

**Props**

- `blok`
  - Type: `Object`
  - Default: `...`

- `searchTerm`
  - Type: `String`
  - Default: `''`

- `filterQuery`
  - Type: `Object`
  - Default: `{}`

- `columns`
  - Type: `Number`
  - Default: `3`
  - Values: `[1, 2, 3, 4]`

**Example**


```vue
<template>
    <SbGrid
        :blok="{
            post_type: 'posts',
            posts_per_page: 3,
            excluding_slugs: story.full_slug,
            is_finite: true
        }"
    />
</template>
```

```vue
<template>
    <SbGrid
        :blok="{
            post_type: 'kategorien',
            sort_by: 'name:asc'
        }"
    />
</template>
```

* Example: Filter by graphql query

```vue
<template>
<BlokSbGridPost
    :blok="{
        post_type: 'blog',
        posts_per_page: 3,
        is_finite: true
    }"
    v-bind="{
        filterQuery
    }"
/>
</template>
<script>
export default {
  computed: {
    filterQuery() {
      return {
        user_id: {
          in: this.user.id
        }
      }
    }
  }
}
</script>
```


```vue
<template>
    <SbGrid
        :blok="{
            post_type: 'portfolio',
            posts_per_page: 3,
            is_finite: true
        }"
        v-bind="{
            columns: 1,
            filterQuery
        }"
    />
</template>
```
     

## organisms

@TODO