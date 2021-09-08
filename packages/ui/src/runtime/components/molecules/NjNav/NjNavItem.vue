<template>
  <component
    :is="tag"
    v-bind="linkTo"
  >
    <slot>
      {{ label }}
    </slot>
  </component>
</template>
<script>
// DON'T USE type === a !!!
// .native modifier is not allowed -> Known issue
// https://github.com/vuejs/ui/issues/32
// https://github.com/vuejs/vue/issues/10939
// https://github.com/vuejs/vue/pull/11052

export default {
  props: {
    linkTo: {
      type: [String, Object],
      default: null,
      required: true
    },
    tag: {
      type: String,
      default: '',
      required: true
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
