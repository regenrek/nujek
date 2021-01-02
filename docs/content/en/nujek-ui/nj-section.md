---
title: <NjSection>
description: ''
category: Nujek Ui
position: 2
---


This wrapper component is used to `position` and `size` the content within. By default, it renders a `div` element.

The `NjSection` component helps with the following use cases:

* Set `width` and `position` of your inner content with `flexbox`
* Add a `background image` or `background color` to your section
* Add optional default spacing to your section with `spacingY` to get consistent section spacings.

## Props

- `bgImage`
  - Type: `String`
  - Default: ``

- `maxWidth`
  - Type: `String`
  - Default: ``

- `position`
  - Type: `String`
  - Default: ``
  - Values: `['left', 'center', 'right']`

- `width`
  - Type: `String`
  - Default: ``
  - Values: `['content', 'boxed', 'full-width']`

- `spacingY`
  - Type: `Boolean`
  - Default: `false`
  - Desc: Adds default y spacing to Sections

## Example

```md
<NjSection width="boxed" position="center">
    <h1>My Blog</h1>
    <p>Lorem ipsum dolor at simet...</p>
</NjSection>
```

<NjSection width="boxed" position="center">
    <h1>My Blog</h1>
    <p>Lorem ipsum dolor at simet...</p>
</NjSection>



## Best practices

We define a section as something which the user can see in his viewport. So we define a section always as root node of a storyblok `blok_<name>` component. So in terms of **storyblok** its the same as a `blok`. If you add a `blok`in your storyblok story you basically always have a `section` wrapper around it.


## Theme Configuration

```
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
          wrapper: 'bg-teal-200 flex justify-center',
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