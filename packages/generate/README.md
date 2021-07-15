# Nujek Generator

With the generator you can easily create blok components on the fly via given Storyblok schema.json file. 


# Install

```
npm install -g @nujek/generator
```

Without polluting your global npm, you can use `npx`
```
npx @nujek/generator [arguments]
```

# Usage


Create components from default directory /scheme/schema.json
```
nujek-generate 
```

Define a custom dir/file where you can find the schema
```
nujek-generate --file custom/schema.json
```

```
nujek-generate --dir myschemafolder
```
* Notice: All *.json files inside `myschemafolder` will be parsed
For example
```
myschemafolder/
 - blok_richtext.json
 - blok_image.json
 - blok_textimage.json
 - blok_hero.json
 - blok_<anything>.json
```


# Specification

## File generator

The generate command will create at least two files per component definition in schema.json
For a given schema.json you will get the following output
<details>
  <summary>schema.json</summary>

```
{
  "components": [
    {
      "name": "blok_content",
      "display_name": null,
      "created_at": "2020-12-20T16:30:13.055Z",
      "updated_at": "2020-12-20T16:30:23.302Z",
      "id": 1243392,
      "schema": {
        "title": {
          "type": "text"
        },
        "text": {
          "type": "richtext"
        }
      },
      "image": null,
      "preview_field": null,
      "is_root": false,
      "preview_tmpl": null,
      "is_nestable": true,
      "all_presets": [],
      "preset_id": null,
      "real_name": "blok_content",
      "component_group_uuid": "c53a06a1-e18c-4d15-bdc4-efe29ef4a1bf",
      "component_group_name": "molecules"
    },
    {
      "name": "blok_hero",
      "display_name": null,
      "created_at": "2020-12-19T08:18:39.035Z",
      "updated_at": "2020-12-21T12:27:55.014Z",
      "id": 1242769,
      "schema": {
        "title": {
          "type": "text"
        },
        "video": {
          "type": "asset",
          "filetypes": [
            "images",
            "videos"
          ],
          "description": "",
          "display_name": ""
        },
        "link": {
          "type": "bloks",
          "restrict_components": true,
          "restrict_type": "",
          "component_whitelist": [
            "sub_link"
          ]
        }
      },
      "image": null,
      "preview_field": null,
      "is_root": false,
      "preview_tmpl": null,
      "is_nestable": true,
      "all_presets": [],
      "preset_id": null,
      "real_name": "blok_hero",
      "component_group_uuid": "c53a06a1-e18c-4d15-bdc4-efe29ef4a1bf",
      "component_group_name": "organism"
    },
    {
      "name": "blok_slider",
      "display_name": null,
      "created_at": "2021-01-25T12:42:57.423Z",
      "updated_at": "2021-01-25T12:49:19.431Z",
      "id": 1299333,
      "schema": {
        "item": {
          "type": "text"
        },
        "slider_items": {
          "type": "bloks",
          "restrict_components": true,
          "component_whitelist": [
            "sub_link"
          ]
        }
      },
      "image": null,
      "preview_field": null,
      "is_root": false,
      "preview_tmpl": null,
      "is_nestable": true,
      "all_presets": [],
      "preset_id": null,
      "real_name": "blok_slider",
      "component_group_uuid": "c53a06a1-e18c-4d15-bdc4-efe29ef4a1bf",
      "component_group_name": "organisms"
    },
    {
      "name": "blok_text_image",
      "display_name": null,
      "created_at": "2021-01-25T12:50:31.228Z",
      "updated_at": "2021-01-25T12:50:31.228Z",
      "id": 1299370,
      "schema": {},
      "image": null,
      "preview_field": null,
      "is_root": false,
      "preview_tmpl": null,
      "is_nestable": true,
      "all_presets": [],
      "preset_id": null,
      "real_name": "blok_text_image",
      "component_group_uuid": "c53a06a1-e18c-4d15-bdc4-efe29ef4a1bf",
      "component_group_name": "organisms"
    },
}
```
</details>

Generator will create the following files in a `nujek` project:

* The **name** of the component gets converted from Snake Case `blok_text_image` to PascalCase `BlokTextImage`. For the `.vue` components itself the `Blok` Prefix will be removed in the name.

*  The folder structure will be created according the `component_group_name` which is defined for each component in the `schema.json`.

* If none `"component_group_name"` is not set **or** the name equals `bloks` the components will be generated in the `compnents/` folder directly. 

* For every `Blok` a `.js` file will be generated inside a `bloks` folder. This is mandatory.

```
 my-nujek-project/ 
    components/
      bloks/ # will create folder if not exists
        BlokContent.js
        BlokHero.js
        BlokSlider.js
        BlokTextImage.js
    molecules/
        Content.vue
    organisms/
        Hero.vue
        Slider.vue
        TextImage.vue
```

## Component content

Js Files have the following template:

` <BlokCompnentName>.js` Template
```
import { forwardProps } from '@nujek/shared'
import %{{ComponentName}} from '~/components/%{{ComponentPathAndName}}'
export default {
  name: '%{{'Blok'+ComponentName}}',
  props: ['blok'],
  functional: true,
  render (h, context) {
    return h(TextImage, {
      props: forwardProps(context.props.blok)
    })
  }
}

```
Rendered
```
import { forwardProps } from '@nujek/shared'
import TextImage from '~/components/TextImage'
export default {
  name: 'BlokTextImage',
  props: ['blok'],
  functional: true,
  render (h, context) {
    return h(TextImage, {
      props: forwardProps(context.props.blok)
    })
  }
}
```

`ComponentName.vue` Template
```
<template>
  <div>
    Hi from Blok
  </div>
</template>

<script>
export default {
  props: {
    // prop definition according to schema.json
  }
}
</script>
<style lang="postcss" scoped></style>
```

`ComponentName.vue` Rendered
```
<template>
  <div>
    Hi from Blok
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="postcss" scoped></style>
```

# Schema Definition
There are two possible schema definitions which `@nujek/generate can handle`

### Single 
```
{
    "name": "blok_content",
    "display_name": null,
    // ...
}
```

### Multiple
```
{
  "components": [
    {
      "name": "blok_content",
      // ...
    },
    {
      "name": "blok_hero",
      // ...
    },
}
```

## Exclude content types
With pregenerated schema files you will also get some overhead which are content type definitions and not components.

Content Types are filterable via `is_nestable === false` attribute. 

For example:

```
{
  "components": [
    {
      "name": "blok_text_image",
      "is_nestable": true
      // other fields
    },
    {
      "name": "content-page",
      "is_nestable": true
      // other fields
    },
    {
      "name": "LandingPage",
      "is_nestable": false
      // other fields
    }
  ]
}
```

# Contribute

Clone nujek repository

```
git@github.com:regenrek/nujek.git
yarn 
```

### Build
```
cd packages/generator
yarn build
```

### Run (untested)
```
cd packages/generator
npx ./src/index.js 
npx ./dist/index.js
```