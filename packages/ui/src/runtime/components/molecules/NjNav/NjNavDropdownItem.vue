<template>
  <component
    :is="tag"
    v-if="tag"
    v-bind="{ ...$attrs }"
    v-on="dropdownListener"
  >
    <slot name="label">
      <span class="relative flex h-full items-center">
        <span class="flex flex-col">
          <span class="flex flex-col items-center">
            <span class="block leading-none text-red-600">{{ label }}</span>
          </span>
        </span>
      </span>
    </slot>
    <slot
      v-bind="{
        linkTo,
        isDropdownOpen,
        activeIndex,
        activeDropdownIndex}"
    />
  </component>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    linkTo: {
      type: [String, Object],
      default: null
    },
    tag: {
      type: String,
      default: 'a'
    },
    label: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: -1
    },
    eventModifier: {
      type: String,
      default: 'click',
      validator: (propValue) => {
        return ['click', 'hover', 'none']
      }
    }
  },
  data () {
    return {
      activeIndex: -1,
      activeDropdownIndex: -1,
      isDropdownOpen: false
    }
  },
  computed: {
    dropdownListener () {
      const vm = this

      const customListener = {
        ...(vm.isClickable ? { click: () => vm.toggleDropdown(vm.index) } : null),
        ...(vm.isHover
          ? {
              mouseenter: () => vm.openDropdown(vm.index),
              mouseleave: () => vm.closeDropdown(vm.index)
            }
          : null)
      }

      return Object.assign({},
        this.$listeners,
        customListener
      )

      // this.isNone ||
      // isClickable ?
      // { click: toggleDropdown, click.native: toggleDropdown } :
      // { mouseenter: openDropdown,
      //   mouseenter.native: openDropdown,
      //   mouseleave: closeDropdown,
      //   mouseleave.native: closeDropdown
      // }
    },
    hasDropdownItems () {
      return !!this.$slots.children
    },
    isClickable () {
      return this.eventModifier === 'click'
    },
    isHover () {
      return this.eventModifier === 'hover'
    },
    isNone () {
      return this.eventModifier === 'none' && {}
    }
  },
  watch: {
    isDropdownOpen (old, newValue) {
      console.log('isdropdownopen', old, newValue)
    },
    activeIndex (old, newValue) {
      console.log('activeIndex', old, newValue)
    }
  },
  methods: {
    toggleDropdown (index) {
      this.activeIndex = index
      this.activeDropdownIndex = index
      this.isDropdownOpen = !this.isDropdownOpen

      this.$emit('toggle-dropdown', this.isDropdownOpen)
    },
    openDropdown (index) {
      console.log('open dropdown', index)
      this.activeIndex = index

      this.isDropdownOpen = true
      this.activeDropdownIndex = index

      this.$emit('open-dropdown', index)
    },
    closeDropdown () {
      this.isDropdownOpen = false
      this.activeIndex = -1
      this.activeDropdownIndex = -1

      this.$emit('close-dropdown')
    },
    getSubItems (index) {
      if (this.isDropdownOpen && this.mainNavigation?.[index]?.subNavigation) {
        return this.mainNavigation?.[index]?.subNavigation
      }
    },
    hasSubItems (navItem) {
      console.log('has subitems')
      return true
      // return !!navItem?.subNavigation?.length
    }
  }
}
</script>
