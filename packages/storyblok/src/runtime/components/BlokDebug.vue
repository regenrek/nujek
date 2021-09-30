<template>
  <div class="border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
    <div component="blok_image_2" class="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto">
        <div class="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-100">
          <div class="px-4 py-5 sm:p-6">
            <div class="mx-auto grid text-center">
              <img
                src="../images/empty.svg"
                alt="empty component"
                class="mx-auto"
              >
              <h3 class="text-xl font-bold font-mono">
                {{ toPascalCase(componentName) }}.vue
              </h3>
              <span class="text-sm text-gray-400 font-mono">{{ componentName }}</span>
            </div>
            <div class="mt-6">
              <NjTabs :tabs="tabs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toPascalCase } from '@nujek/shared'

export default {
  name: 'BlokDebug',
  props: {
    blok: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      tabs: [
        {
          label: 'Summary',
          component: 'BlokDebugDetails',
          href: '#blok-details',
          current: true,
          props: {
            blokProps: this.blok,
            componentName: this.toPascalCase(this.componentName)
          }
        },
        {
          label: 'Props',
          component: 'BlokDebugProps',
          href: '#blok-debug-props',
          current: false,
          props: {
            blokProps: this.blok
          }
        },
        {
          label: 'Component',
          component: 'BlokDebugCodePreview',
          href: '#blok-debug-code-preview',
          current: false,
          props: {
            componentName: this.toPascalCase(this.componentName)
          }
        }
      ]
    }
  },
  computed: {
    componentName () {
      return this.blok?.component || 'AnonComponent'
    }
  },
  methods: {
    toPascalCase
  }
}
</script>
