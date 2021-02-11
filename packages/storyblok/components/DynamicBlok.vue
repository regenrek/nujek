<template>
  <component
    :is="lazyComponent"
    v-bind="$attrs"
    v-if="lazyComponent"
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
  hydrateWhenVisible,
} from 'vue-lazy-hydration';
import { toPascalCase } from '@nujek/shared';
// inspiration for slot handling:
// https://gist.github.com/loilo/73c55ed04917ecf5d682ec70a2a1b8e2
export default {
  name: 'SbDynamic',
  props: {
    name: {
      type: String,
      required: true,
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
      default: 'WhenIdle',
    },
  },
  computed: {
    hydrate() {
      return this[`hydrate${this.hydration}`] ?? null;
    },
    lazyComponent() {
      const component = this.$nuxtDynamic.prefixes.includes(
        toPascalCase(this.name),
      );

      if (!component) {
        if (this.$nuxtDynamic.debug) {
          return 'blok-debug';
        }
        return '';
      }

      return this.name;
    },
  },
  methods: {
    hydrateOnInteraction,
    hydrateWhenIdle,
    hydrateWhenVisible,
  },
};
</script>
