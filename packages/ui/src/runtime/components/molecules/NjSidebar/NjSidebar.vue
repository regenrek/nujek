<template>
  <div class="sidebar" :class="getThemeClass('sidebar')">
    <transition name="backdrop" @afterLeave="handleClose">
      <div
        v-if="show"
        :class="getThemeClass('backdrop')"
        @click="handleClose"
      />
    </transition>
    <transition name="slide">
      <div v-if="show" :class="getThemeClass('sidenav')" :style="getStyle">
        <slot name="header" />
        <slot />
        <slot name="footer" />
      </div>
    </transition>
  </div>
</template>
<script>
import Component from '../../../base/Component'

const NjSidebar = Component.extend({
  name: 'NjSidebar',
  props: {
    width: {
      type: String,
      default: '300px',
      required: false
    },
    show: {
      type: Boolean,
      default: false
    },
    fixedClasses: {
      type: [String, Array, Object],
      default: () => ({
        backdrop:
          'fixed z-400 bg-black bg-opacity-75 w-full h-full left-0 top-0 fixed',
        sidenav:
          'bg-white fixed left-0 top-0 z-500 duration-200 transition-transform h-full overflow-scroll'
      })
    }
  },
  data: () => ({
    showBackdrop: false
  }),
  computed: {
    getStyle () {
      return { width: this.width }
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:show', false)
    }
  }
})

export default NjSidebar
</script>
