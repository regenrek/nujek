<template>
  <div>
    <Blok v-for="blok in bloks" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script>
export default {
  name: 'SbBloksDynamic',
  props: {
    bloks: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
