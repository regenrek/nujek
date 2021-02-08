<template>
  <div :class="getThemeClass('wrapper')">
    <slot name="header">
      <header :class="getThemeClass('header')">
        <div v-if="hasLogoSlot" :class="getThemeClass('logo-wrapper')">
          <slot name="logo" />
        </div>
        <div
          v-if="hasNavSlot"
          :class="{
            [getThemeClass('navbar-wrapper')]: true,
            'justify-center': navbarPos == 'center',
            'justify-start': navbarPos == 'left',
            'justify-end': navbarPos == 'right'
          }"
        >
          <slot name="nav" />
        </div>
        <div v-if="hasToolbarSlot" :class="getThemeClass('toolbar-wrapper')">
          <slot name="toolbar" />
        </div>
      </header>
    </slot>
  </div>
</template>
<script>
import Component from '../../../base/Component'
import NjBurger from '../../atoms/NjBurger'
import Vue from 'vue'
import NjNavItem from './NjNavItem'
Vue.component('NjNavItem', NjNavItem)

const NjNav = Component.extend({
  name: 'NjNav',
  components: {
    NjBurger
  },
  props: {
    burgerOpen: {
      type: Boolean,
      default: false
    },
    navbarPos: {
      type: String,
      default: 'center'
    },
    classes: {
      type: Object,
      default() {
        return {
          wrapper: 'mx-4',
          'logo-wrapper': 'flex items-center justify-center',
          'navbar-wrapper': 'flex items-center col-span-3',
          'toolbar-wrapper': 'flex items-center justify-end col-span-2',
          header: 'grid grid-cols-6'
        }
      }
    }
  },
  computed: {
    hasLogoSlot() {
      return !!this.$slots.logo
    },
    hasNavSlot() {
      return !!this.$slots.nav
    },
    hasToolbarSlot() {
      return !!this.$slots.toolbar
    },
    hasSearchBarSlot() {
      return !!this.$slots.searchBar
    }
  }
})
export default NjNav
</script>
