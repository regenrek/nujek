<template>
  <nav :class="getThemeClass('nav')">
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
      <NjNavItem
        :link-to="$sbutils.linkTo(navItem)"
        :tag="$sbutils.tag(navItem)"
        :label="$sbutils.label(navItem)"
        :class="getThemeClass('navItem')"
      />
    </slot>
  </nav>
</template>

<script>
import Component from '../../../base/Component'
const NjNavItems = Component.extend({
  name: 'NjNavItems',
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    },
    classes: {
      type: Object,
      default () {
        return {
          nav: '',
          navItems: '',
          navItem: 'cursor-pointer hover:text-gray-400'
        }
      }
    }
  }
})

export default NjNavItems
</script>
