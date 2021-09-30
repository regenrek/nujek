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
        <slot v-bind="{ activeTab: localValue}">
          <div v-for="(tab, index) in tabs" v-show="index === activeTab" :key="index">
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
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
const isEqual = () => JSON.stringify(a) === JSON.stringify(b)

export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    tabs: {
      type: Array,
      default: () => []
    },
    activeTab: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      localValue: this.value
    }
  },
  watch: {
    value (value) {
      if (isEqual(value, this.localValue)) {
        return
      }
      this.localValue = value
    },
    localValue (localValue) {
      if (isEqual(this.value, localValue)) {
        return
      }
      this.$emit('input', localValue)
    }
  },
  methods: {
    onChangeCurrent (tab) {
      console.log('onclick', tab)

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

<style lang="postcss" scoped>
.tabs-nav-item.is-active {
  font-weight: 600;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: -0rem;
    @apply bg-red-700;
    left: 0;
    width: 100%;
    height: 2px;
  }
}

.tabs-nav-item {
  padding-left: 0;
}

.tabs-nav-item:before {
  position: relative;
  background: transparent;
  left: 0;
  top: 0;
  height: auto;
  width: auto;
}

.tabs-nav {
  padding-bottom: 0;
}
</style>
