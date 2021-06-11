---
title: <SbGrid>
description: ''
category: Nujek Ui
position: 46
---


SbGrid is a powerful component for showing a list of data. 

The `SbGrid` component helps with the following use cases:

* Display a list of components in a grid/list (Team members, products, portfolio items)
* Archive pages for news or blog items
* Filter/Sort grid
* Make items searchable inside a grid



## Props

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
  - Values: `[1, 2, 3, ... 12]`

- `disableFetch`
  - Type: `Boolean`
  - Default: `false`
  - Desc: `Experimental: You can disable remote fetching. Use this in combination with dataSource`

- `disableFetch`
  - Type: `Boolean`
  - Default: `false`
  - Desc: `Experimental: Instead of auto remote fetching a grid source you can add your manual data source to the grid`

## Example


### Using with storyblok

The following example shows a storyblok dynamic grid component where
SbGrid is used to display different types of data (Team members, News e.g.)

First define a Storyblok wrapper component where `blok` prop is spreaded
and forwared to a `CustomGrid` component.

```js[bloks/BlokGrid.js]
import { forwardProps } from '@nujek/shared'
import TkGrid from '../molecules/CustomGrid.vue'

export default {
  name: 'BlokGrid',
  functional: true,
  props: ['blok'],
  render(h, context) {
    return h(TkGrid, {
      props: forwardProps(context.props.blok)
    })
  }
}

```

SbGrid is capable of showing dynamic bloks according to the current storyblok slug. 
All you need todo is to use the `post_type` prop.

```vue[molecules/CustomGrid.vue]
<template>
  <NjSection variant="boxed">
    <NjHeading class="font-fjord leading-13 mb-20" variant="display2" tag="h1">
      {{ title }}
    </NjHeading>

    <SbGrid
      class="gap-y-8"
      :blok="{ post_type: fullSlug }"
      :columns="gridCols"
    />
  </NjSection>
</template>
```

### Other examples


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
<SbGrid
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
## Storyblok Schema

```json[blok_grid]
{
  "_uid": "8e119b5d-32b3-4ed1-ab5e-23e9281782xd",
  "title": "Portfolio",
  "source": "b9d20c2d-15bc-4x3c-2308-6b29734c2234",
  "variant": "portfolioGrid",    // Variant is optional
  "subtitle": "",
  "component": "blok_grid"
}
```