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
    srcSets: {
      type: Array,
      default() {
        return [720, 1440, 2160]
      }
    },
    quality: {
      type: String,
      default: '70'
    },
    resize: {
      type: Object,
      default() {
        return {
          width: '1440',
          height: '0'
        }
      }
    },
    facialDetection: {
      type: Boolean,
      default: false
    },
    fitIn: {
      type: Boolean,
      default: false
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
            opt: this.transformImage(
              filename,
              `${this.fitInC}${this.resize.width}x${this.resize.height}/${this.facial}filters:quality(${this.quality})`
            ),
            lowsrc: this.transformImage(
              filename,
              `200x0/${this.facial}filters:quality(1)`
            ),
            webp: this.transformImage(
              filename,
              `${this.fitInC}${this.resize.width}x${this.resize.height}/${this.facial}filters:quality(${this.quality}):format(webp)`
            ),
            srcset: this.srcSets
              .map((width, index) => {
                let size = ''
                if (index > 0) size = ` ${index + 1}x`
                return (
                  this.transformImage(
                    filename,
                    `${this.fitInC}${width}x0/${this.facial}filters:quality(${this.quality})`
                  ) + size
                )
              })
              .join(', ')
          }
        : null
    },
    facial() {
      return (this.facialDetection && 'smart/') || ''
    },
    fitInC() {
      return (this.fitIn && 'fit-in/') || ''
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
