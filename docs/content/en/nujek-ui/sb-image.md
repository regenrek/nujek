---
title: <SbImage>
description: ''
category: Nujek Ui
position: 2
---

 If you want to show a storyblok asset from storyblok CDN it's recommend to use `<SbImage />`. For all other use cases (local image or image from remote source) <a href="/nujek-ui/nj-image">`<NjImage />`</a> can be used.


## Examples

```html
<SbImage src="https://myimage.jpg" :classes="{aspectRatio: 'aspect-ratio-16/9'}" />
```


## Props

- `src`
  - Type: `Object`
  - Default: `''`
  - In contrast to `<NjImage>` only object type is allowed for image src
- `disableLazyLoad`
  - Type: `Boolean`
  - Default: `false`
- `srcSets`
  - Type: `Array`
  - Default: `[720, 1440, 2160]`

See <a href="/nujek-ui/nj-image">`<NjImage />`</a> for inherited props.

## Slots

See <a href="/nujek-ui/nj-image">`<NjImage />`</a> for inherited slots.


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
