<template>
  <figure :class="[getClassesforFigure, hasAspectRatio]">
    <div :class="getThemeClass('aspectRatio')">
      <picture v-if="src" :class="getThemeClass('picture')" class="block">
        <source
          v-if="src.webp"
          ref="webp"
          :data-srcset="src.webp"
          type="image/webp"
        />
        <source v-if="srcset" ref="srcset" :data-srcset="srcset" />

        <img
          v-bind="$attrs"
          :alt="srcAlt"
          :src="srcImg"
          :data-src="srcImg"
          :class="[
            getThemeClass('image'),
            !disableLazyLoad && 'lazyload blur-up'
          ]"
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
import get from 'lodash.get'
import Component from '@nujek/ui/dist/runtime/base/Component.js'

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
          aspectRatio: '',
          image: 'object-cover'
        }
      }
    },
    imagePosition: {
      type: String,
      default: ''
    }
  },
  watch: {
    src() {
      // not needed if lazyload is disabeld
      if (this.disableLazyLoad) {
        return
      }
      this.$refs.webp.srcset = ''
      this.$refs.srcset.srcset = ''
    }
  },
  computed: {
    srcImg() {
      return typeof this.src === 'string'
        ? this.src
        : get(this.src, 'opt', null)
        ? this.src.opt
        : null
    },
    srcAlt() {
      if (this.src.alt) {
        return this.src.alt
      }
      return 'imagemage'
    },
    srcset() {
      return get(this.src, 'srcset', false)
    },
    hasAspectRatio() {
      return (
        /aspect-ratio-/.test(this.getThemeClass('aspectRatio')) &&
        'has-aspect-ratio'
      )
    },
    getClassesforFigure() {
      if (this.imagePosition === 'top') {
        return `flex content-start ${this.getThemeClass('figure')}`
      } else if (this.imagePosition === 'center') {
        return `flex content-center ${this.getThemeClass('figure')}`
      } else if (this.imagePosition === 'bottom') {
        return `flex content-end ${this.getThemeClass('figure')}`
      } else {
        return `${this.getThemeClass('figure')}`
      }
    }
  }
})

export default NjImage
</script>
