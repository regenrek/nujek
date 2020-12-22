<template>
  <component :is="getTag" class="nj-heading" :class="[getColor, getVariant]">
    <slot />
  </component>
</template>
<script>
const variantAssignments = {
  display1: { tag: 'h1', tw: 'text-display1' },
  display2: { tag: 'h1', tw: 'text-display2' },
  display3: { tag: 'h1', tw: 'text-display3' },
  h1: { tag: 'h1', tw: 'text-h1' },
  h2: { tag: 'h2', tw: 'text-h2' },
  h3: { tag: 'h1', tw: 'text-h3' },
  h4: { tag: 'h1', tw: 'text-h4' },
  h5: { tag: 'h1', tw: 'text-h5' },
  h6: { tag: 'h1', tw: 'text-h6' },
  paragraph: { tag: 'p', tw: 'text-paragraph' },
  base: { tag: 'h2', tw: 'text-base' }
}

export default {
  props: {
    color: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    through: {
      type: String,
      default: ''
    }
  },
  computed: {
    getColor() {
      // @TODO: Use this for theming later (dark mode e.g.)
      return this.color
    },
    getVariant() {
      return this.size
        ? variantAssignments[this.size]?.tw
        : variantAssignments[this.variant]?.tw
    },
    getTag() {
      return this.tag || variantAssignments[this.variant]?.tag
    }
  }
}
</script>
