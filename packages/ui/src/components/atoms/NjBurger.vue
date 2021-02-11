<template>
  <div
    :class="[{ active: isOpenBurger }, getThemeClass('wrapper')]"
    :active="open"
    @click="isOpenBurger = !isOpenBurger"
  >
    <button
      type="button"
      :class="[{ active: open }, getThemeClass('button')]"
      :active="open"
      title="Menu"
    >
      <slot>
        <span class="nj-burger-bar--1" :class="getThemeClass('bar')" />
        <span class="nj-burger-bar--2" :class="getThemeClass('bar')" />
        <span class="nj-burger-bar--3" :class="getThemeClass('bar')" />
      </slot>
    </button>
  </div>
</template>
<script>
import Component from '../../base/Component';

const NjBurger = Component.extend({
  name: 'NjBurger',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    fixedClasses: {
      type: [String, Array, Object],
      default: () => ({
        wrapper: 'nj-burger',
        button: 'relative block border-0 focus:outline-none',
        bar: '',
      }),
    },
    classes: {
      type: [String, Array, Object],
      default: () => ({
        bar: 'bg-gray-800',
      }),
    },
  },
  computed: {
    isOpenBurger: {
      get() {
        return this.open;
      },
      set(val) {
        this.$emit('update:open', val);
      },
    },
  },
});

export default NjBurger;
</script>
