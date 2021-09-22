<template>
  <div class="textImage">
    {{ blok.image.filename }}
    {{ blok.title }}
    {{ category }}
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: () => {}
    },
    category: {
      type: String,
      default: null
    }
  }
}
</script>
