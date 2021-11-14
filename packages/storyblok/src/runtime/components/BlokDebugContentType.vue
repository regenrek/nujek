<template>
  <div class="border-b border-gray-100 bg-gradient-to-br from-blue-50 to-white min-h-screen">
    <div component="blok_image_2" class="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-100">
          <div class="px-4 py-5 sm:p-6">
            <div class="mx-auto grid auto-cols-min text-center relative justify-center">
              <img
                src="../images/empty.svg"
                alt="empty component"
                class="mx-auto"
              >
              <h3 class="text-xl font-bold font-mono relative">
                {{ toPascalCase(componentName) }}.vue
              </h3>
              <span class="text-sm text-gray-400 font-mono">{{ componentName }}</span>
            </div>
            <div class="mt-6">
              <NjTabs :tabs="tabs">
                <template #tabs-head-right>
                  <div class="absolute right-0 transform nj-center-vertical">
                    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      <svg class="animate-ping -ml-1 mr-1.5 h-2 w-2 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      Content Type
                    </span>
                  </div>
                </template>
                <template #code-preview>
                  <div class="py-4">
                    <span class="inline-block pr-3">📝</span><span class="text-black text-xs font-mono">New file: `components/content-types/<strong>{{ toPascalCase(componentName) }}.vue</strong>`</span>
                  </div>
                  <pre class="bg-gray-800 rounded-lg p-4"><code class="text-xs text-white font-mono"><span class="text-yellow-300">&lt;template&gt;</span>
&lt;<span class="text-yellow-300">div</span>&gt;
  &lt;<span class="text-yellow-300">div</span> <span class="text-yellow-600">v-editable</span>="blok"&gt;
    <span class="text-gray-500">&lt;!-- content here ... --&gt;</span>
  &lt;<span class="text-yellow-300">/div</span>&gt;
  <span class="text-gray-500">&lt;!-- render dynamic bloks from `{{ componentName }}` content type --&gt;</span>
  &lt;<span class="text-yellow-300">slot</span> <span class="text-yellow-600">name</span>="bloks"<span class="text-yellow-300">&nbsp;/&gt;</span>
&lt;<span class="text-yellow-300">/div</span>&gt;

<span class="text-yellow-300">&lt;/template&gt;</span>
<span class="text-yellow-300">&lt;script&gt;</span>
  <span class="text-yellow-600">export default</span> {
    props: {
      blok: {
          type: <span class="text-yellow-600">Object</span>,
          default: () <span class="text-indigo-500">=></span> ({})
      }
    }
  }
<span class="text-yellow-300">&lt;/script&gt;</span></code></pre>
                </template>
              </NjTabs>
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
  name: 'BlokDebugContentType',
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
            componentName: this.toPascalCase(this.blok?.component || this.blok?.content?.component),
            componentPath: 'components/content-types',
            type: 'Content Type'
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
            componentName: this.toPascalCase(this.blok?.component || this.blok?.content?.component),
            type: 'content-types'
          }
        }
      ]
    }
  },
  computed: {
    componentName () {
      return this.blok?.component || this.blok?.content?.component
    }
  },
  methods: {
    toPascalCase
  }
}
</script>
<style lang="postcss" scoped>
.nj-center-vertical {
  top: 50%;
  transform: translate3d(0,-50%,0)
}
</style>
