<template>
  <div class="video-buffering" :style="image" />
</template>

<script>

export default {
  props: {
    poster: {
      type: String,
      required: true
    }
  },
  computed: {
    image () {
      return {
        backgroundImage: `url(${this.poster})`
      }
    }
  }
}
</script>
