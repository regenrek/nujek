<template>
  <div
    :class="[{ active: isOpenBurger }, getThemeClass('wrapper')]"
    @click="isOpenBurger = !isOpenBurger"
  >
    <slot>
      <button
        type="button"
        class="relative block border-0 cursor-pointer focus:outline-none"
        :class="[{ active: open }, getThemeClass('button')]"
        title="Menu"
      >
        <span class="burger-bar--1" />
        <span class="burger-bar--2" />
        <span class="burger-bar--3" />
      </button>
    </slot>
  </div>
</template>
<script>
// import { mapState, mapActions } from 'vuex'
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
        wrapper: 'burger'
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
  // computed: {
  //   ...mapState({
  //     navOpen: (state) => state.nav.navOpen
  //   })
  // },
  // methods: {
  //   ...mapActions({
  //     toggle: 'nav/toggle'
  //   })
  // }
})

export default NjBurger
</script>
