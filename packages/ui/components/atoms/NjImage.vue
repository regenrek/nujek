<template>
  <figure :class="getThemeClass('figure')">
    <div :class="getThemeClass('aspectRatio')">
      <picture v-if="src" :class="getThemeClass('picture')">
        <source v-if="src.webp" :data-srcset="src.webp" type="image/webp" />
        <source v-if="srcset" :data-srcset="srcset" />

        <img
          v-bind="$attrs"
          :alt="srcAlt"
          :src="srcImg"
          :data-src="srcImg"
          :srcset="
            !disableLazyLoad &&
            `data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==`
          "
          :class="!disableLazyLoad && 'lazyload blur-up'"
        />
      </picture>

      <template v-else>
        <img v-if="usePlaceholder" :src="placeholderImage" />
      </template>
    </div>
    <slot v-bind="{ caption, copyright }" name="content">
      <span>{{ caption }}</span>
      <span v-if="copyright">&copy; {{ copyright }}</span>
    </slot>
    <slot name="placeholder" />
  </figure>
</template>

<script>
import Component from '../../base/Component'

const NjImage = Component.extend({
  components: {},
  inheritAttrs: false,
  props: {
    src: {
      type: [String, Object],
      default: null
    },
    disableLazyLoad: {
      type: Boolean,
      default: false
    },
    caption: {
      type: String,
      default: ''
    },
    copyright: {
      type: String,
      default: ''
    },
    usePlaceholder: {
      type: Boolean,
      default: true
    },
    placeholderImage: {
      type: String,
      default: ''
    },
    classes: {
      type: Object,
      default() {
        return {
          aspectRatio: 'aspect-ratio-16/9'
        }
      }
    }
  },
  computed: {
    srcImg() {
      return typeof this.src === 'string'
        ? this.src
        : this.src?.opt
        ? this.src.opt
        : null
    },
    srcAlt() {
      if (this.src.alt) {
        return this.src.alt
      } else {
        return 'Storyblok Image'
      }
    },
    srcset() {
      if (Object.prototype.hasOwnProperty.call(this.src, 'srcset')) {
        return this.src.srcset
      }
      return false
    }
  }
})

export default NjImage
</script>
