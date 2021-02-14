<template>
  <DynamicBlok
    :name="blok.component | dashify"
    v-bind="$attrs"
    :blok="blok"
    v-on="$listeners"
  >
    <!-- pass through blok slots -->
    <template v-for="(group, propName) in children" #[propName]="slotData">
      <SbBlok
        v-for="child in group"
        :key="child._uid"
        v-bind="slotData"
        :blok="child"
        :hydration="hydration"
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
  </DynamicBlok>
</template>

<script>
/**
 * Pass slots through from parent to child components:
 * https://gist.github.com/loilo/73c55ed04917ecf5d682ec70a2a1b8e2
 */
export default {
  name: 'SbBlok',
  props: {
    // representing a storyblok schema
    blok: {
      type: Object,
      default: () => ({})
    },
    // can be `OnInteraction`, `SsrOnly`, `WhenIdle`, `WhenVisible`
    hydration: {
      type: String,
      default: 'WhenIdle'
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
        Object.entries(this.blok).filter(
          ([prop, value]) => isArray(value) && isObject(value[0]) && isBlok(value[0])
        )
      )
    }
  }
}
</script>
