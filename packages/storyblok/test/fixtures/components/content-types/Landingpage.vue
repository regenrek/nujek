<template>
  <div>
    <h1>{{ blok.title }}</h1>
    <div>{{ blok.featuredImage.filename }}</div>
    <slot name="bloks" :category="blok.category" />
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

<style lang="postcss" scoped>

</style>
