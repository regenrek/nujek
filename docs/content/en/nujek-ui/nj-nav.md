---
title: <NjNav>
description: ''
category: Nujek Ui
position: 2
---

Build quickly website navigation menus with `NjNav`. 


## Examples

Basic example with <a href="">NjNav</a>

```html
<NjNav>
    <template #burger-menu>
      <NjBurger open.sync="isOpenBurger" />
    </template>
</Njav>
```

<a target="_blank" href="https://nujek-storybook.vercel.app/?path=/story/njnav--default-nav">All Storyblok examples</a>

## Props

- `open`
  - Type: `Boolean`
  - Default: `false`


## Best practices

## Theme Configuration

The following example will hide the Burger Button on default for smaller screens

```js
import NjBurger from '@nujek/ui/components/atoms/NjBurger.vue'

const settings = {
  NjBurger: {
    component: NjBurger,
    props: {
      fixedClasses: {
        'wrapper': 'lg:hidden'
      }
    }
  }
}
```
