<template>
  <component
    :is="lazyComponent"
    v-if="lazyComponent"
    v-bind="$attrs"
    v-on="$listeners"
  >
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
import {
  hydrateOnInteraction,
  hydrateWhenIdle,
  hydrateWhenVisible
} from 'vue-lazy-hydration'
import { toPascalCase } from '@nujek/shared'
// inspiration for slot handling:
// https://gist.github.com/loilo/73c55ed04917ecf5d682ec70a2a1b8e2
export default {
  name: 'SbDynamic',
  props: {
    name: {
      type: String,
      required: true
    },
    /**
     * options: [
     *   OnInteraction,
     *   WhenIdle,
     *   WhenVisible,
     *   SsrOnly,
     * ]
     */
    hydration: {
      type: String,
      default: 'WhenIdle'
    }
  },
  computed: {
    hydrate() {
      return this[`hydrate${this.hydration}`] ?? null
    },
    lazyComponent() {
      console.log('lazy', this.name)
      //return this.hydrate ? this.hydrate(this.name) : this.name
      return this.$nuxtDynamic.debug &&
        this.$nuxtDynamic.prefixes.includes(toPascalCase(this.name))
        ? this.name
        : 'BlokDebug'
    }
  },
  methods: {
    hydrateOnInteraction: hydrateOnInteraction,
    hydrateWhenIdle: hydrateWhenIdle,
    hydrateWhenVisible: hydrateWhenVisible
  }
}
</script>
