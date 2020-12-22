<template>
  <NjImage :src="image" v-bind="{ ...$props, ...$attrs }" />
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    src: {
      type: Object,
      default: null
    },
    objectFit: {
      type: String,
      default: 'cover'
    },
    effect: {
      type: String,
      default: ''
    },
    srcSets: {
      type: Array,
      default() {
        return [720, 1440, 2160]
      }
    },
    aspectRatio: {
      type: String,
      default: '16/9'
    },
    aspectRatioMobile: {
      type: String,
      default: '16/9'
    }
  },
  computed: {
    image() {
      const filename =
        typeof this.src === 'string'
          ? this.src
          : this.src?.filename
          ? this.src.filename
          : null

      return filename
        ? {
            alt: this.src.alt,
            opt: this.transformImage(filename, '1440x0/filters:quality(70)'),
            lowsrc: this.transformImage(filename, '200x0/filters:quality(1)'),
            webp: this.transformImage(
              filename,
              '1440x0/filters:quality(70):format(webp)'
            ),
            srcset: this.srcSets
              .map((width, index) => {
                let size = ''
                if (index > 0) size = ` ${index + 1}x`
                return (
                  this.transformImage(
                    filename,
                    `${width}x0/filters:quality(70)`
                  ) + size
                )
              })
              .join(', ')
          }
        : null
    }
  },
  methods: {
    transformImage(image, option) {
      if (!image) return ''
      if (!option) return ''

      let imageService = '//img2.storyblok.com/'
      let path = image.replace(/^https?:/i, '').replace('//a.storyblok.com', '')
      return imageService + option + path
    }
  }
}
</script>
