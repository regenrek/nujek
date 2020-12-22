<template>
  <component :is="tag" class="nj-section relative" :class="classes">
    <div :class="bgImageClass" :style="bgImageStyle">
      <slot />
    </div>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div',
      validator: (value) => ['div', 'section'].includes(value)
    },
    imagePath: {
      type: String,
      default: ''
    },
    sectionSpacing: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: 'full-width',
      validator: function (value) {
        return ['content', 'boxed', 'full-width'].indexOf(value) !== -1
      }
    },
    vSpacing: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    bgImageStyle() {
      return {
        ...(this.imagePath && { backgroundImage: `url(${this.imagePath})` })
      }
    },
    bgImageClass() {
      return [
        ...((this.imagePath && ['bg-cover', 'bg-center']) || []),
        ...((this.imagePath &&
          this.sectionSpacing && [
            'pto-1',
            'xxl:pt-24',
            'pbo-1',
            'xxl:pb-24'
          ]) ||
          []),
        {
          'mxo-05': this.isContent,
          'w-full': !this.imagePath
        }
      ]
    },
    classes() {
      return [
        ...((!this.isFullWidth && ['xxl:max-w-page', 'mx-auto', 'w-full']) ||
          []),
        ...((this.vSpacing && ['my-8', 'lg:my-12', 'xl:my-16']) || [])
      ]
    },
    spacingClass() {
      return []
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
