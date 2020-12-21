<template>
  <div :class="{ fixed: isFixed }" class="w-full">
    <header class="nj-nav relative flex justify-between items-center">
      <div class="flex space-x-1 md:space-x-4 lg:space-x-0 items-center">
        <slot name="burger-menu" />
        <slot name="logo" />
      </div>
      <slot name="nav" />
      <slot name="toolbar" />
    </header>
  </div>
</template>
<script>
import Vue from 'vue'
import NjNavItem from './NjNavItem'
Vue.component('NjNavItem', NjNavItem)

export default {
  name: 'NjNav',
  props: {
    logo: {
      type: [String, Object],
      default: ''
    },
    logoAlt: {
      type: String,
      default: 'logo'
    },
    isFixed: {
      type: Boolean,
      default: true
    }
  }
}
</script>
