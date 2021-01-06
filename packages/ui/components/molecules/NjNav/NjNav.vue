<template>
  <div :class="getThemeClass('wrapper')">
    <slot name="header">
      <header :class="getThemeClass('header')">
        <slot name="burger-menu">
          <NjBurger :open.sync="burgerOpen" />
        </slot>
        <slot name="logo" />
        <slot name="nav" />
        <slot name="toolbar" />
      </header>
    </slot>
  </div>
</template>
<script>
import Component from '../../../base/Component'
import Vue from 'vue'
import NjNavItem from './NjNavItem'
Vue.component('NjNavItem', NjNavItem)

const NjNav = Component.extend({
  name: 'NjNav',
  props: {
    burgerOpen: {
      type: Boolean,
      default: false
    },
    classes: {
      type: Object,
      default() {
        return {
          wrapper: 'w-full fixed',
          header: 'flex items-center'
        }
      }
    }
  }
})
export default NjNav
</script>
