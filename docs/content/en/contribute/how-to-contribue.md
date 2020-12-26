---
title: How to contribue
description: ''
category: contribue
position: 1
---

## Quick start

First clone nuxt-storyblok-starter project and create your own.

```bash
git clone git@github.com:regenrek/nuxt-storyblok-starter.git my-website
```

## Use nujek/ui library

```
git clone git@github.com:regenrek/nujek-ui.git nujek-ui
```

Link nujek/ui with nuxt-storyblok-starter
```
cd nujek-ui

# with yarn
yarn link

# with npm
npm link
```
You will get a message in the terminal with the link. Now go to nuxt storyblok starter and link nujek-ui as local package

```
# nujek-storyblok-starter workspace

# with yarn
yarn link nujek-ui

# with npm
npm link nujek-ui
```

Finished. Now you can use nujek-ui library in your project.