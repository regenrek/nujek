<template>
  <component
    :is="componentId"
    :component="componentId"
    v-bind="attrs"
    :blok="blok"
    v-on="$listeners"
  >
    <!-- pass through blok slots -->
    <template
      v-for="(group, propName) in children"
      #[propName]="slotData"
    >
      <Blok
        v-for="child in group"
        v-bind="slotData"
        :key="child._uid"
        :blok="child"
      />
    </template>

    <!-- pass through normal slots -->
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>

    <!-- pass through scoped slots -->
    <template
      v-for="(_, scopedSlotName) in $scopedSlots"
      #[scopedSlotName]="slotData"
    >
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>
  </component>
</template>

<script>

import { toPascalCase } from '@nujek/shared'
/**
 * Pass slots through from parent to child components:
 * https://gist.github.com/loilo/73c55ed04917ecf5d682ec70a2a1b8e2
 */
export default {
  name: 'Blok',

  inheritAttrs: false,

  props: {
    // representing a storyblok schema
    blok: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    /**
     * detect all properties of the blok which represent blok schemas as children
     */
    children () {
      const isArray = value => Array.isArray(value) && value.length > 0
      const isObject = value => typeof value === 'object' && value !== null
      const isBlok = value => 'component' in value
      return Object.fromEntries(
        Object.entries(isBlok(this.blok) ? this.blok : this.blok.content).filter(
          ([prop, value]) =>
            isArray(value) && isObject(value[0]) && isBlok(value[0])
        )
      )
    },
    attrs () {
      return {
        ...this.$attrs,
        blok: this.blok
      }
    },
    componentId () {
      const c = toPascalCase(this.blok.component || this.blok.content?.component)

      if (this.$options.components[c]) {
        return c
      }

      if (this.$storyblokNujek.debug) {
        return this.blok.bloks || this.blok.content?.bloks ? 'BlokDebugContentType' : 'BlokDebug'
      }

      return false
    }
  }
}
</script>
