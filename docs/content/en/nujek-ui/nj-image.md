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

### Classes

With classes you haveExample with different aspect-ratio you can use

#### aspectRatio 4/3

<div class="no-prose w-full bg-blue-100 py-10 px-5">
  <div style="max-width: 200px" class="mx-auto">
    <nj-image :disableLazyLoad="true" :classes="{aspectRatio: 'aspect-ratio-4/3', image: 'object-cover'}" src="https://via.placeholder.com/800x600.png/222222/FFFFFF?text=Aspect+Ratio+4/3"></nj-image>
  </div>
</div>

```html
<NjImage :disableLazyLoad="true" :classes="{aspectRatio: 'aspect-ratio-4/3'}" src="https://pathtoimage" />
```

#### aspectRatio 16/9
<div class="no-prose w-full bg-blue-100 py-10 px-5">
  <div style="max-width: 200px" class="mx-auto">
    <nj-image :disableLazyLoad="true" :classes="{aspectRatio: 'aspect-ratio-9/16', image: 'object-cover'}" src="https://via.placeholder.com/800x600.png/222222/FFFFFF?text=Aspect+Ratio+9/16"></nj-image>
  </div>
</div>

```html
<NjImage :disableLazyLoad="true" :classes="{aspectRatio: 'aspect-ratio-9/16'}" src="https://pathtoimage" />
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

```js
import { NjBurger } from '~nujek-ui/components'

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
