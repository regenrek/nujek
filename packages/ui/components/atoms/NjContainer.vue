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
    bgImage: {
      type: String,
      default: ''
    }
  },
  computed: {
    bgImageStyle() {
      return {
        ...(this.bgImage && { backgroundImage: `url(${this.bgImage})` })
      }
    },
    classes() {
      return [
        {
          ...((this.bgImage && ['bg-cover', 'bg-center']) || []),
          [`pxo-2 lg:px-2 xxl:px-12 ${
            this.maxWidth || 'xxl:max-w-container'
          }`]: !this.isFullWidth
        },
        { 'mx-auto': this.isCentered }
      ]
    }
  }
}
</script>
