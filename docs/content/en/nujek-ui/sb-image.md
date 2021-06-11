---
title: <SbImage>
description: ''
category: Nujek Ui
position: 47
---

 If you want to show a storyblok asset from storyblok CDN it's recommend to use `<SbImage />`. For all other use cases (local image or image from remote source) <a href="/nujek-ui/nj-image">`<NjImage />`</a> can be used.

You can read more on Storyblok Image transformations in the following blog posts:

* [Image Service](https://www.storyblok.com/docs/image-service)
* [Image resizing](https://www.storyblok.com/docs/Guides/how-to-resize-images)
* [Image Cropping](https://www.storyblok.com/cl/custom-image-ratio)

## Examples


### Using a Storyblok Image with an aspect-ratio



```html
<SbImage :src="https://myimage.jpg" :classes="{aspectRatio: 'aspect-ratio-16/9', image:'object-cover' }" />
```

<alert>
If you plan to use any <code>aspect-ratio-</code> classes you need to get sure that tailwind <a href="https://github.com/regenrek/nuxt-storyblok-starter/blob/master/tailwind-plugins/aspect-ratio.js" target="_blank">aspect-ratio plugin</a> is <a href="https://github.com/regenrek/nuxt-storyblok-starter/blob/master/tailwind.config.js" target="_blank">installed.</a><br /><br />
If you use aspect ratios nujek adds a <code>figure.has-aspect-ratio</code> class which works with <code>nujek-ui.css</code> styles. So we recommend to add these styles. Read <a href="http://localhost:53886/getting-started/quick-start#styles">here</a> to add them to your project
</alert>

### Using SbImage with custom `width` and `height`

```html
<SbImage
  :src="image"
  :resize="{ width: '398', height: '409' }"
/>
```

### Storybook Examples

<a href="https://nujek-storybook.vercel.app/?path=/story/njimage--image" target="_blank">Nj Image Storybook examples</a>


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
- `quality` <badge>+v0.0.128</badge>
  - Type: `String`
  - Default: `70`
  - The image quality
- `resize` <badge>+v0.0.128</badge>
  - Type: `Object`
  - Default: `{ width: '1440',  height: '0' }`
  - We use 'proportional to width' for optimized images [Storyblok Docs: Image Service](https://www.storyblok.com/docs/image-service#resizing)
- `facialDetection` <badge>+v0.0.128</badge>
  - Type: `Boolean`
  - Default: `false`
  - Experimental: You can define a smart filter that crops around the focal point, [Storyblok Docs: Image Service](https://www.storyblok.com/docs/image-service#facial-detection-and-smart-cropping)
- `fitIn` <badge>+v0.0.128</badge>
  - Type: `Boolean`
  - Default: `false`
  - Todo: Fill not possible yet
  - Experimental: The fit-in argument specifies that the image should not be auto-cropped but auto-resized (shrunk) , [Storyblok Docs: Image Service](https://www.storyblok.com/docs/image-service#fit-in)

See <a href="/nujek-ui/nj-image">`<NjImage />`</a> for inherited props.

## Slots

See <a href="/nujek-ui/nj-image">`<NjImage />`</a> for inherited slots.