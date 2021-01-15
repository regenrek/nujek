---
title: <NjImage>
description: ''
category: Nujek Ui
position: 2
---

 If you want to show a storyblok asset from storyblok CDN it's recommend to use  <a href="/nujek-ui/sb-image">`<SbImage />`</a> . For all other use cases (local image or image from remote source) `<NjImage />` can be used.


## Examples

```html
<NjImage src="https://myimage.jpg" :classes="{aspectRatio: 'aspect-ratio-16/9'}" />
```

## Props

- `src`
  - Type: `String|Object`
  - Default: `''`
- `disableLazyLoad`
  - Type: `Boolean`
  - Default: `false`
- `caption`
  - Type: `String`
  - Default: `''`
- `copyright`
  - Type: `String`
  - Default: `''`
- `usePlaceholder`
  - Type: Boolean
  - Default: true
- placeholderImage
  - Type: String,
  - default: `''`
- classes
  - Type: Object,
  - default: `{ aspectRatio: 'aspect-ratio-16/9' }`

## Slots

| Slot    | description                                                                    |
| ------- | ------------------------------------------------------------------------------ |
| content | Binds `caption` and `copyright` props. Replace template for copyright and captions. |
| placeholder | Replace bottom placeholder |

## Theme Configuration

The following example will hide the Burger Button on default for smaller screens

```
import NjBurger from '@nujek/ui/components/atoms/NjBurger.vue'


const settings = {
  NjImage: {
    component: NjImage,
    props: {
      fixedClasses: {
        'figure': '',
        'aspectRatio': '',
        'pciture': '',
      },
      classes: {

      }
    }
  }
}

```
