<template>
  <component :is="tag" :class="getThemeClass('wrapper')">
    <div :class="getThemeClass('container')">
      <slot />
    </div>
  </component>
</template>

<script>

import Component from '../../base/Component'

const NjSection = Component.extend({
  name: 'NjSection',
  props: {
    tag: {
      type: String,
      default: 'div',
      validator: value => ['div', 'section'].includes(value)
    },
    variants: {
      type: Object,
      default () {
        return {
          boxed: {
            wrapper: 'flex justify-center',
            container: 'max-w-3xl w-full mx-auto md:px-6 xl:px-8'
          },
          fullWidth: {
            wrapper: 'flex justify-center',
            container: 'w-full'
          },
          constrained: {
            wrapper: 'flex justify-center',
            container: 'max-w-3xl w-full px-10'
          }
        }
      }
    }
  }
})

export default NjSection
</script>
