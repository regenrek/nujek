---
title: <NjBurger>
description: ''
category: Nujek Ui
position: 2
---

A burger is a simple toggle which is mostly used for mobile menus.
The component is build to work with `<NjNav>` but can be used independently.

## Examples

Basic example with <a href="/nujek-ui/nj-nav">NjNav</a>

```html
<NjNav>
    <template #burger-menu>
      <NjBurger open.sync="isOpenBurger" />
    </template>
</Njav>
```

## Props

- `open`
  - Type: `Boolean`
  - Default: `false`

## Slots

| Slot    | description                                                                    |
| ------- | ------------------------------------------------------------------------------ |
| default | Custom Burger button. Notice: 'bar' variant not available if you use this slot |

## Best practices

## Theme Configuration

The following example will hide the Burger Button on default for smaller screens

```
import NjBurger from '@nujek/ui/components/atoms/NjBurger.vue'


const settings = {
  NjBurger: {
    component: NjBurger,
    props: {
      fixedClasses: {
        'wrapper': 'lg:hidden'
      },
      classes: {

      }
    }
  }
}

```
