---
title: Section
description: ''
category: Nujek Ui
position: 2
---


A wrapper component which is used to `position` and `size` content. By default, it renders a `div` element.

The `n-section` component helps with the following use cases:

* Set `width` and `position` of your inner content with `flexbox`
* Add a `background image` or `background color` to your section
* Add optional default spacing to your section with `spacingY` to get consistent section spacings.

### Best practices

We define a section as something which the user can see in his viewport. So we define a section always as root node of a storyblok `blok_<name>` component. So in terms of **storyblok** its the same as a `blok`. If you add a `blok`in your storyblok story you basically always have a `section` wrapper around it.


### `<n-section>`

**Props**

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

**Example**

```md
<NjSection width="boxed" position="center">
    <h1>My Blog</h1>
    <p>Lorem ipsum dolor at simet...</p>
</NjSection>
```