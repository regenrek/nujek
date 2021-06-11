---
title: Helper Functions
description: ''
category: Nujek Shared
position: 70
---


## Cases

### `toPascalCase`

PascalCase is a naming convention in which the first letter of each word in a compound word is capitalized.

In nujek its mostly been used to transform components name from storyblok to a more standardized format like

```
blok_hero_slider -> BlokHeroSlider or
blok-hero-slider -> BlokHeroSlider

blok_grid -> BlokGrid

... and so on 
```

## object

### `forwardProps`

This helper function is used for Storyblok wrapper components to clear out all undefined properties from an object


```js[components/bloks/BlokHeader]
import { forwardProps } from '@nujek/shared'
import Header from '~/components/organisms/Header'

export default {
  name: 'BlokHeader',
  functional: true,
  props: ['blok'],
  render(h, context) {
    return h(Header, {
      props: forwardProps(context.props.blok)
    })
  }
}
```


## events