---
title: <NjNav>
description: ''
category: Nujek Ui
position: 2
---

The component is part `<NjNav>` to make it work with the predefined state.

<alert>
Possibily we make this component independtly of the current used <code>nav</code> store but for now you need to use it in combination with <code>NjNav</code>
</alert>

## Props

- `open`
  - Type: `Boolean`
  - Default: `false`

## Examples

Basic example with <a href="">NjNav</a>

```html
<NjNav>
    <template #burger-menu>
      <NjBurger open.sync="isOpenBurger" />
    </template>
</Njav>
```

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
      }
    }
  }
}

```
