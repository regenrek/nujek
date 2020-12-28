<template>
  <component
    :is="tag"
    class="nj-section flex"
    :class="getElementCssClass('wrapper')"
  >
    <div :class="getElementCssClass('bgImage')" :style="bgImageStyle">
      <div :class="getElementCssClass('container')">
        <slot />
      </div>
    </div>
  </component>
</template>

<script>
import Component from '../../base/Component'
//import { Component } from 'vue-tailwind'

const NjSection = Component.extend({
  name: 'NjSection',
  props: {
    tag: {
      type: String,
      default: 'div',
      validator: (value) => ['div', 'section'].includes(value)
    },
    bgImage: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'center',
      validator: function (value) {
        return ['left', 'center', 'right'].indexOf(value) !== -1
      }
    },
    width: {
      type: String,
      default: 'full-width',
      validator: function (value) {
        return ['content', 'boxed', 'full-width'].indexOf(value) !== -1
      }
    },
    spacingY: {
      type: Boolean,
      default: false
    },
    fixedClasses: {
      type: Object,
      default() {
        return {
          wrapper: 'flex',
          wrapperFullWidth: 'w-full',
          wrapperBoxed: 'justify-center',
          container: '',
          containerBoxed: 'xl:max-w-container',
          bgImage: ''
        }
      }
    },
    classes: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    bgImageStyle() {
      return {
        ...(this.bgImage && { backgroundImage: `url(${this.bgImage})` })
      }
    },
    bgImageClasses() {
      return [
        ...((this.bgImage && ['bg-cover', 'bg-center']) || []),
        {
          'mxo-05': this.isContent,
          'w-full': !!this.bgImage
        }
      ]
    },
    containerClasses() {
      return [...((!this.isFullWidth && ['xl:max-w-container']) || [])]
    },
    wrapperClasses() {
      return [
        ...((!this.isFullWidth && ['mx-auto', 'w-full']) || []),
        ...((this.spacingY && ['my-8', 'lg:my-12', 'xl:my-16']) || []),
        ...((this.position === 'left' && ['justify-start']) ||
          (this.position === 'center' && ['justify-center']) ||
          (this.position && ['justify-end']) ||
          [])
      ]
    },
    isFullWidth() {
      return this.width === 'full-width'
    },
    isBoxed() {
      return this.width === 'boxed'
    },
    isContent() {
      return this.width === 'content'
    }
  }
})

export default NjSection
</script>
