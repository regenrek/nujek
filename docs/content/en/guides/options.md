---
title: Options
description: ''
category: Guides
position: 31
---

You can configure `@nujek` in your `nuxt.config.js`. 

<alert>
Add you tokens and secret data to the <code>.env</code> file and read them via <code>process.env.SB_CLIENT_ACCESS_TOKEN</code>. You should read this excellent <a href="https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config" target="_blank">blog post</a> about nuxt environment variables or look at the  <nuxt-link to="/examples/starter-project">Nujek Starter Project</nuxt-link>
</alert>


## Minimal options

```js
  buildModules: [
    '@nujek/ui',
    [
      '@nujek/storyblok',
      { 
        storyblokConfig: {
            accessToken: '<Storyblok access token>',
            defaultLanguage: 'en',
            cacheProvider: 'memory',
            version: 'auto',
            disableManagementApi: true
        }, 
        debug: process.env.NODE_ENV === 'production' ? false : true // Enabling debug mode in development is recommended!
      }
    ]
  ],
```


## `@nujek/storyblok`

### Storyblok Management API example

[Storyblok Management Api](https://www.storyblok.com/docs/api/management) allows deep integration with the CMS and offers a programmatic approach to creating and updating your content.


<alert>
If you don't need user generated content you probably won't need management api.  
</alert>

```js
  buildModules: [
    ['@nujek/ui', { withConsole: true }],
    [
      '@nujek/storyblok',
      { 
        storyblokConfig: {
          accessToken: '<Storyblok access token>',
          oAuthToken: '<Storyblok oAuthToken>',
          spaceId: '<Storyblok Space ID>',
          defaultLanguage: 'en',
          cacheProvider: 'memory',
          version: 'auto',
          disableManagementApi: false
        }, 
        withConsole: true, 
        debug: true 
      }
    ]
  ],
```

### Module Configuration

#### Nuxt Storyblok Queries

```js
  buildModules: [
    '@nujek/ui',
    [
      '@nujek/storyblok',
      { 
        storyblokConfig: { /* add config here */}, 
        storyblokQueries = {
          formatResponse: false // disabling converting Storyblok props to camelCase
        }
      }
    ]
  ],
```


### Properties

#### `storyblokConfig`

* Type: `Object`
* Default: `{}`

This is required to access Storyblok Api

```js
storyblokConfig: {
  accessToken: '<Storyblok access token>',
  oAuthToken: '<Storyblok oAuthToken>',
  spaceId: '<Storyblok Space ID>',
  defaultLanguage: 'en',
  cacheProvider: 'memory',
  version: 'auto',
  disableManagementApi: false
}, 
```


#### `storyblokQueries`

* Type: `Object`
* Default: `{ formatResponse: false }`

Custom configuration for <nuxt-link to="/nujek-storyblok/packages#nujeknuxt-storyblok-queries">Nuxt Storyblok Queries</nuxt-link>

```js
storyblokConfig: {
  storyblokQueries: {
    // ... config
  }
}, 
```


#### `storyblokQueries.formatResponse`

* Type: `Object`
* Default: `{ formatResponse: false }`

This depends on your use case in Storyblok CMS. We define our field names in storyblok like this `slider_items` 
or `image_gallery`. But in a vue component we prefer `Camel-Casing` like `sliderItems` and `imageGallery`.
So with formatResponse these field names gets transformed to `Camel-Case`

```js
storyblokConfig: {
  storyblokQueries: {
    formatResponse: true
  }
}, 
```


#### `debug`

* Type: `Boolean`
* Default: `false`

Debug mode is great for developing websites. If you already built your Storyblok Schema with dynamic bloks you will get a list of bloks including the response json from Storyblok. This helps you to know which bloks need to be implemented and what props you will need.

```js
storyblokConfig: {
  debug: true
}, 
```

#### `withConsole`

* Type: `Boolean`
* Default: `false`

Verbose output in the console for debugging

```js
storyblokConfig: {
  withConsole: false
}, 
```

#### `enableStoryblokRouter`

<alert type="warning">
Deprecated. We decided to remove nuxt-storyblok-router.
</alert>

#### `enableStoryblokQueries`

* Type: `Boolean`
* Default: `true`

Enable/disable <nuxt-link to="/nujek-storyblok/packages#nujeknuxt-storyblok-queries">Nuxt Storyblok Queries</nuxt-link>

```js
storyblokConfig: {
  enableStoryblokQueries: false
}, 
```


#### `enableStoryblokNuxt`

* Type: `Boolean`
* Default: `true`

Enable/disable <nuxt-link to="/nujek-storyblok/packages#storyblok-nuxt">Storyblok Nuxt</nuxt-link>

```js
storyblokConfig: {
  enableStoryblokNuxt: true
}, 
```

## `@nujek/ui`

### autoloadComponents <badge>+v0.0.192</badge>

* Type: `Boolean`
* Default: `true`

Autoload components via `nuxt/components` module. If you disable
this option you will need to register your components locally.

### nujekCss <badge>+v0.0.179</badge>

* Type: `Boolean`
* Default: `true`

Add nujek css for component styling. Disable it if you don't want prestyled components

### addDefaultPostCssPlugins

* Type: `Boolean`
* Default: `true`

Nujek [Styles](getting-started/quick-start#styles) are using `postcss` plugins like `nested` e.g. So we add these plugins on `@nujek/ui` module initialization.

Basically `@nujek/ui` components don't use any predefined `<styles>` so if you don't need any `postcss` plugin you can disable this option.

### enableLazySizesPlugin

Type: `Boolean`
Default: `true`

The `NjImage` (`SbImage`) component has lazyloading support which uses the popular [`lazysizes`](https://github.com/aFarkas/lazysizes) plugin. You can disable this plugin with this option.

### storeTemplates.nav

Type: `Boolean`
Default: `true`

To quickstart `NjNav` component we add a functional state to the project. You can disable this state with this options