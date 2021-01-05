<template>
  <div
    :class="[{ active: open }, getThemeClass('wrapper')]"
    @click="open = !open"
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
    model: {
      get() {
        return this.open
      },
      set(val) {
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
<style lang="postcss" scoped>
.burger {
  --burger-x: 9px;
  --burger-size: 50px;
  --burger-thickness: 3px;
  --burger-color-dark: #011638;
  --burger-color-light: #ffffff;
}

/* default */
.burger > button {
  height: var(--burger-size);
  width: var(--burger-size);
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  > span {
    background-color: var(--burger-color-dark);
    position: absolute;
    top: 50%;
    right: var(--burger-x);
    left: var(--burger-x);
    height: var(--burger-thickness);
    width: auto;
    margin-top: -1px;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
      opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  &.active > span {
    background-color: var(--burger-color-light);
  }
  &.dark > span {
    background-color: var(--burger-color-light);
  }
  .burger-bar--1 {
    transform: translateY(calc(-1 * var(--burger-x)));
  }
  .burger-bar--2 {
    transform-origin: 100% 50%;
  }
  .burger-bar--3 {
    transform: translateY(var(--burger-x));
  }
}
/* hover */
.burger > button:hover {
  .burger-bar--2 {
    transform: scaleX(1);
  }
}
/* active */
.burger.active {
  .burger-button {
    transform: rotate(-180deg);
  }
  /* .burger-bar {

    background-color: var(--burger-color-dark);
  } */
  .burger-bar--1 {
    transform: rotate(45deg);
  }
  .burger-bar--2 {
    opacity: 0;
  }
  .burger-bar--3 {
    transform: rotate(-45deg);
  }
}
</style>
