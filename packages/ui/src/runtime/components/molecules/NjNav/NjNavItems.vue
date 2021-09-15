<template>
  <component :is="tag" :class="getThemeClass('nav')" :aria-label="ariaLabel">
    <slot
      v-for="(navItem, index) in items"
      v-bind="{
        index,
        linkTo: $sbutils.linkTo(navItem),
        tag: $sbutils.tag(navItem),
        label: $sbutils.label(navItem),
        navItem
      }"
      :class="getThemeClass('navItems')"
    >
      <component
        :is="navItemType"
        :link-to="$sbutils.linkTo(navItem)"
        :tag="$sbutils.tag(navItem)"
        :label="$sbutils.label(navItem)"
        :class="getThemeClass('navItem')"
      />
    </slot>
  </component>
</template>

<script>

import Component from '../../../base/Component'
const NjNavItems = Component.extend({
  name: 'NjNavItems',
  props: {
    ariaLabel: {
      type: String,
      default: 'Nav'
    },
    items: {
      type: Array,
      default () {
        return []
      },
      required: true
    },
    classes: {
      type: Object,
      default () {
        return {
          nav: '',
          navItems: '',
          navItem: 'cursor-pointer'
        }
      }
    },
    navType: {
      type: String,
      default: 'single',
      validator: (propValue) => {
        return ['dropdown', 'single']
      }
    },
    tag: {
      type: String,
      default: 'nav',
      validator: (propValue) => {
        return ['nav', 'div']
      }
    }
  },
  computed: {
    // @TODO: rename to NjNavDropdownItem
    navItemType () {
      return this.navType === 'dropdown' ? 'NjNavDropdownItem' : 'NjNavItem'
    }
  }
})

export default NjNavItems
</script>
