<template>
  <div class="richtext">
    <rich-text-renderer
      v-if="typeof text === 'object' && text"
      :document="text"
    />
    <div v-else v-html="text" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: [Object, String],
      default() {
        return {}
      }
    }
  }
}
</script>
<style lang="postcss">
/* remove p block inside list items */
.richtext li > p:first-child {
  display: inline;
  margin: 0;
}
.richtext.milestone-text p {
  margin-top: 0;
}
</style>
