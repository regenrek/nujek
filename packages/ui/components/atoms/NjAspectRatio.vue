<template>
  <div class="nj-aspect-ratio" :class="ar">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    aspectRatio: {
      type: String,
      default: '16/9'
    },
    aspectRatioMobile: {
      type: String,
      default: ''
    }
  },
  computed: {
    ar() {
      return [
        ...(this.aspectRatio && !this.aspectRatioMobile
          ? [`aspect-ratio-${this.aspectRatio}`]
          : []),
        ...(this.aspectRatioMobile
          ? [
              `aspect-ratio-${this.aspectRatioMobile} xl:aspect-ratio-${this.aspectRatio}`
            ]
          : [])
      ]
    }
  }
}
</script>
