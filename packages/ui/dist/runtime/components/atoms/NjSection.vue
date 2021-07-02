<template>
  <component :is="tag" :class="getThemeClass('wrapper')" :style="bgImageStyle">
    <div :class="getThemeClass('container')">
      <slot />
    </div>
  </component>
</template>

<script>

import Component from '../../base/Component'

const NjSection = Component.extend({
  name: 'NjSection',
  props: {
    tag: {
      type: String,
      default: 'div',
      validator: value => ['div', 'section'].includes(value)
    },
    bgImage: {
      type: String,
      default: ''
    },
    fixedClasses: {
      type: Object,
      default () {
        return {
          bgImage: 'w-full'
        }
      }
    },
    classes: {
      type: Object,
      default () {
        return {}
      }
    },
    variants: {
      type: Object,
      default () {
        return {
          boxed: {
            wrapper: 'flex justify-center w-full mx-auto',
            container: 'w-full xl:max-w-7xl'
          },
          fullWidth: {
            wrapper: 'w-full',
            container: 'w-full'
          }
        }
      }
    }
  },
  computed: {
    bgImageStyle () {
      return {
        ...(this.bgImage && { backgroundImage: `url(${this.bgImage})` })
      }
    }
  }
})

export default NjSection
</script>
