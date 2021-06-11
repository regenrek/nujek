---
title: Install Starter Template
category: installation
position: 10
---

If you like to try out nujek and it's features and prefer a more out of the box solution then go for [nuxt-storyblok-starter](https://github.com/regenrek/nuxt-storyblok-starter) template.

<alert>Requirement: <code>npm install -g degit</code></alert>

```bash
npx degit regenrek/nuxt-storyblok-starter my-website
```

## Import demo content

<alert type="warning"><b>Notice:</b> This will be an upcoming feature. In progress.</alert>

Just import our demo scheme and content to your space to quickstart the starter template.

If you haven't done yet install [`storyblok cli`](https://github.com/storyblok/storyblok)
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
