<template>
  <div
    :class="classes"
    class="nj-container relative w-full"
    :style="bgImageStyle"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    isCentered: {
      type: Boolean,
      default: true
    },
    isFullWidth: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: ''
    },
    imagePath: {
      type: String,
      default: ''
    }
  },
  computed: {
    bgImageStyle() {
      return {
        ...(this.imagePath && { backgroundImage: `url(${this.imagePath})` })
      }
    },
    classes() {
      return [
        {
          ...((this.imagePath && ['bg-cover', 'bg-center']) || []),
          [`pxo-1 lg:pxo-1 xxl:px-12 ${
            this.maxWidth || 'xxl:max-w-page'
          }`]: !this.isFullWidth
        },
        { 'mx-auto': this.isCentered }
      ]
    }
  }
}
</script>
