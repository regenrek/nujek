---
title: <NjSection>
description: ''
category: Nujek Ui
position: 2
---

This wrapper component is used to `position` and `size` the content within. By default, it renders a `div` element.

The `NjSection` component helps with the following use cases:

- Set `width` and `position` of your inner content with `flexbox`
- Add a `background image` or `background color` to your section
- Add optional default spacing to your section with `spacingY` to get consistent section spacings.

## Props

- `bgImage`
  - Type: `String`
  - Default: `''`

## Variants

### Boxed

<img src="/boxed_layout.svg" class="img" alt="Nujek - Boxed Layout" />

With `boxed` you can create a section which has a centered container and max width.

```md
<NjSection variant="boxed">
    <h1>My Blog</h1>
    <p>Lorem ipsum dolor at simet...</p>
</NjSection>
```

### Full Width

<img src="/full_width_layout.svg" class="img" alt="Nujek - Boxed Layout" />

```md
<NjSection variant="fullWidth">
    <h1>My Blog</h1>
    <p>Lorem ipsum dolor at simet...</p>
</NjSection>
```

### Examples

#### Simple Example

```html
<NjSection>
  <h1>My Blog</h1>
  <p>Lorem ipsum dolor at simet...</p>
</NjSection>
```

#### Landingpage

In this example we're going to stack `NjSection` and make use of
its variants to display different layout sizes.

<a target="_blank" href="https://nujek-storybook.vercel.app
/?path=/story/njsection--landingpage">Full Storybook example here</a>

<img src="/landing_page.svg" class="img" alt="Nujek - Boxed Layout" />

```html
<div>
  <NjSection class="bg-blue-200 py-4 md:py-16" variant="boxed"> ... </NjSection>
  <NjSection class="py-4 md:py-16" variant="boxed"> ... </NjSection>
  <NjSection class="py-4 md:py-16" variant="boxed"> ... </NjSection>
  <NjSection class="py-4 md:py-16" variant="fullWidth">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 xl_gap-8">
      <div class="flex">
        <div class="py-4 md:p-12">
          <h3 class="text-2xl">Card 1</h3>
          <p>...</p>
        </div>
      </div>
      <div class="flex">
        <div class="py-4 md:p-12">
          <h3 class="text-2xl">Card 1</h3>
          <p>...</p>
        </div>
      </div>
      <div class="flex">
        <div class="py-4 md:p-12">
          <h3 class="text-2xl">Card 1</h3>
          <p>...</p>
        </div>
      </div>
    </div>
  </NjSection>
</div>
```

### With Image

```html
<NjSection
  :fixedClasses="{ wrapper: 'flex bg-cover bg-no-repeat aspect-ratio-16/9' }"
  bgImage="http://placekitten.com/400/300"
  variant="boxedBgImage"
>
  My Section
</NjSection>
```

<alert>

More Examples here: <a href="https://nujek-storybook.vercel.app
/?path=/story/njsection--boxed">Storybook examples</a>

</alert>

## Best practices

We define a section as something which the user can see in his viewport. Mostly its the first element inside a storyblok `blok_<name>` component. In terms of **storyblok** its the same as a `blok`. If you add a `blok`in your storyblok story you basically always have a `section` wrapper around it.

## Theme Configuration

```js
import NjSection from '@nujek/ui/components/atoms/NjSection.vue'

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
          wrapper: 'bg-gray-200 flex justify-center',
          container: 'bg-red-400 max-w-2xl'
        },
        fullWidth: {
          wrapper: 'bg-yellow-200 w-full',
          container: 'bg-yellow-400 w-full'
        }
      }
    }
  }
}
```
