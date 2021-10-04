<template>
  <div class="tabs">
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>

      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <slot name="tabs-head-left">
        <select id="tabs" name="tabs" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          <option v-for="tab in tabs" :key="tab.component" :selected="tab.current">
            {{ tab.label }}
          </option>
        </select>
      </slot>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            v-for="tab in tabs"
            :key="tab.component"
            :class="[tab.current ? 'border-yellow-500 text-yellow-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']"
            class="cursor-pointer"
            :aria-current="tab.current ? 'page' : undefined"
            @click="onChangeCurrent(tab)"
          >
            {{ tab.label }}
          </button>
        </nav>
      </div>
    </div>

    <div class="hidden sm:block">
      <!-- tabs content -->
      <div class="tabs-content">
        <slot>
          <client-only>
            <div v-for="tab in tabs" v-show="tab.current" :key="tab.component">
              <component v-bind="{ ...tab.props }" :is="tab.component">
                <!-- pass through normal slots -->
                <template v-for="(_, slotName) in $slots" #[slotName]>
                  slotName: {{ slotName }}
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
            </div>
          </client-only>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onChangeCurrent (tab) {
      this.tabs.forEach((t) => {
        if (t.component !== tab.component) {
          t.current = false
        } else {
          t.current = true
        }
      })
    }
  }
}
</script>
