---
title: Installation
description: ''
category: Getting started
position: 3
---

Before you begin you need to **decide** if you want to use our starter template or start a storyblok project with nuxt from scratch.


* [1. Nuxt Storyblok Starter template](#1-nuxt-storyblok-starter-template)
* [2. Manual Installation](#2-manual-setup)


<alert>Nujek requires Node.js >=12.0.0</alert>

## 1. Nuxt Storyblok Starter template

If you like to try out nujek and it's features and prefer a more out of the box solution then go for [nuxt-storyblok-starter](https://github.com/regenrek/nuxt-storyblok-starter) template.

<alert>Requirement: <code>npm install -g degit</code></alert>

### 1.1 Installation

To install and use the template just use the following cmd. 

```bash
npx degit regenrek/nuxt-storyblok-starter my-website
```


### 1.2 Import demo content

Just import our demo scheme and content to your space to quickstart the starter template.

First install [`storyblok cli`](https://github.com/storyblok/storyblok)
```
npm i storyblok -g
```

Create a new space or partner space via [storyblok ui](https://app.storyblok.com/#!/me/spaces/new?n=1). (Maybe you can also use `storyblok quickstart` - not tried yet)

For the demo import you will need the `spaceid` which you can find in the url of storyblok ui or in the settings page.

<img src="/sb/storyblok-spaceid.png" alt="Storyblok Space Id How to"/>

You can also list your spaces including the space id with storyblok cli.
```
storyblok spaces
```




## 2. Manual Setup

If you want to start your own template from scratch or you want to gain more control and know whats happen behind the scenes you can also look at the [manual install](/getting-started/manual-install) instructions.

