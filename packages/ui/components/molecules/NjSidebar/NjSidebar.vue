<template>
  <div class="sidebar">
    <transition name="backdrop" @afterLeave="handleClose">
      <div v-if="show" class="backdrop-bg" @click="handleClose" />
    </transition>
    <transition name="slide">
      <div v-if="show" class="sidenav bg-white" :style="getStyle">
        <slot name="header" />
        <slot />
        <slot name="footer" />
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: '300px',
      required: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    showBackdrop: false
  }),
  computed: {
    getStyle() {
      return { width: this.width }
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:show', false)
    }
  }
}
</script>
