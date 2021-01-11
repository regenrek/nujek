<template>
  <div
    :class="[
      { active: isOpenBurger, fixed: isOpenBurger },
      getThemeClass('wrapper')
    ]"
    :active="open"
    @click="isOpenBurger = !isOpenBurger"
  >
    <slot>
      <button
        type="button"
        :class="[{ active: open }, getThemeClass('button')]"
        :active="open"
        title="Menu"
      >
        <span class="nj-burger-bar--1" :class="getThemeClass('bar')" />
        <span class="nj-burger-bar--2" :class="getThemeClass('bar')" />
        <span class="nj-burger-bar--3" :class="getThemeClass('bar')" />
      </button>
    </slot>
  </div>
</template>
<script>
import Component from '../../base/Component'

const NjBurger = Component.extend({
  name: 'NjBurger',
  props: {
    open: {
      type: Boolean,
      default: false
    },
    classes: {
      type: [String, Array, Object],
      default: () => ({
        wrapper: 'nj-burger fixed z-600',
        button: 'relative block border-0 focus:outline-none',
        bar: 'bg-gray-800'
      })
    }
  },
  computed: {
    isOpenBurger: {
      get: function () {
        return this.open
      },
      set: function (val) {
        this.$emit('update:open', val)
      }
    }
  }
})

export default NjBurger
</script>
