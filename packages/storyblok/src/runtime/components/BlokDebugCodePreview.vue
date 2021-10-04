<template>
  <div class="mt-6">
    <slot name="code-preview" />
  </div>
</template>

<script>

export default {
  props: {
    componentName: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
