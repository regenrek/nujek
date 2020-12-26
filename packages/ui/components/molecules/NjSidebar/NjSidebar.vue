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
      this.$emit('close')
    }
  }
}
</script>
<style lang="postcss">
@media all and (max-width: 400px) {
  .sidenav {
    width: 100% !important;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.backdrop-enter-active {
  transition: all 150ms ease-out;
}

.backdrop-leave-active {
  transition: all 150ms ease-in;
}

.backdrop-enter,
.backdrop-leave-to {
  opacity: 0;
}

.backdrop-bg {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9998;
  position: fixed;
}

.sidenav {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 9999;
  transition: transform 250ms;
  overflow-y: scroll;
}

.sidebar-items > li {
  > a {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: 2px;
      height: 2px;
      left: 0;
      right: 0;
      width: 100%;
      z-index: 999;
    }
  }
  > ul > li > a {
    font-size: 0.9em;
  }
}
</style>
