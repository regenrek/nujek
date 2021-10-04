<template>
  <div class="imageBlok">
    <h1>{{ blok.title }}</h1>
    <span>{{ blok.filename }}</span>
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
