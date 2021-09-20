<!-- eslint-disable vue/no-v-html -->
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
      default () {
        return {}
      }
    }
  }
}
</script>
