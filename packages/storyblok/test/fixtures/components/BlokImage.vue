<template>
  <div class="imageBlok">
    <h1>{{ blok.image.title }}</h1>
    <span>{{ blok.image.filename }}</span>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
