<template>
  <component :is="tag" class="nj-section flex" :class="classes">
    <div :class="bgImageClasses" :style="bgImageStyle">
      <div :class="containerClasses">
        <slot />
      </div>
    </div>
  </component>
</template>

<script>
// @TODO: Variants boxed-center - e.g.

export default {
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
          'w-full': !this.bgImage
        }
      ]
    },
    containerClasses() {
      return [...(!this.isFullWidth && ['xxl:max-w-container'])]
    },
    classes() {
      return [
        ...((!this.isFullWidth && ['xxl:max-w-page', 'mx-auto', 'w-full']) ||
          []),
        ...((this.spacingY && ['my-8', 'lg:my-12', 'xl:my-16']) || []),
        ...((this.position === 'left' && ['justify-start']) ||
          (this.position === 'center' && 'justify-center') ||
          (this.position && 'justify-end') ||
          []),
        {
          'justify-center': this.isCenter
        }
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
}
</script>
