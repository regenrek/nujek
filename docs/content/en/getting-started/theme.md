---
title: Theme
description: ''
category: Getting started
position: 3
---

To adjust components to your project in terms of style, colors e.g. you will have to create different theme variants.

<alert>
The theming system works like vue-tailwind's <a href="https://www.vue-tailwind.com/docs/theming">Theming</a> approach. The only difference here is that we don't register new components on plugin initialization. Instead we inject the settings and merge it with possible props. This gives us the possibility to use it with <code>@nuxt/components</code>.
</alert>

## Use Theme system

To enable theming you need to create a plugin file in nuxtjs. 

```js
// plugins/nujek-ui.js

import Vue from 'vue'
import Nujek from '~nujek/ui/plugin'
import { NjSection } from '~nujek-ui/components'

const settings = {
  // your settings
}

Vue.use(Nujek, settings)
```

<alert>
<b>New</b> in version 
</alert>


## Example for a custom section

In this example we adjust the `<NjSection>` with a new variant.



```js
// plugins/nujek-ui.js

import Vue from 'vue'
import Nujek from '~nujek-ui/ui/plugin'
import { NjSection } from '~nujek-ui/components'

const settings = {
  NjSection: {
    component: NjSection,
    props: {
      classes: {
        wrapper: 'bg-blue-600',
        container: 'bg-red-600'
      },
      variants: {
        boxed: {
          wrapper: 'bg-teal-200 flex justify-center',
          container: 'bg-red-400 max-w-screen-2xl'
        },
        fullWidth: {
          wrapper: 'bg-yellow-200 w-full',
          container: 'bg-yellow-400 w-full'
        }
      }
    }
  }
}

Vue.use(Nujek, settings)
```