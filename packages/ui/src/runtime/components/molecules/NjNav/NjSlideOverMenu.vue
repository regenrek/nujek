<template>
  <NjSidebar v-bind="{ ...$props, ...$attrs }">
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

    <template #default>
      <NjNavItems
        v-slot="{label, linkTo, index, navItem}"
        :items="items"
        aria-label="Slide Over Menu"
        :classes="{
          nav: 'space-y-1',
          navItem:
            'text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm'
        }"
      >
        <NjNavDropdownItem
          v-slot="{ isDropdownOpen }"
          :index="index"
          :link-to="linkTo"
          :label="label"
          event-modifier="click"
          class="
                  flex
                  flex-col
                  py-4
                  whitespace-nowrap
                  cursor-pointer
                  hover:text-gray-400
                  transition-colors
                  duration-150
                "
        >
          <span class="relative z-700 flex h-full items-center">
            <span class="flex flex-col">
              <span class="flex flex-col items-center">
                <span class="block leading-none">{{
                  navItem.label
                }}</span>
              </span>
            </span>
          </span>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <NjNavItems
              v-show="isDropdownOpen"
              tag="div"
              :aria-label="`SliderOverMenu-${index}`"
              :items="navItem.subNavigation"
              :classes="{
                nav: 'space-y-1',
                navItem:
                  'text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm'
              }"
            />
          </transition>
        </NjNavDropdownItem>
      </NjNavItems>
    </template>
  </NjSidebar>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    console.log('all slots', this.$slots)
    console.log('default slots', this.$slots.default)
  }
}
</script>

<style lang="postcss" scoped>

</style>
