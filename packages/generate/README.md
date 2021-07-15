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


