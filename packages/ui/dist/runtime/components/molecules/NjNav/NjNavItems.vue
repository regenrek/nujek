<template>
  <nav>
    <slot
      v-for="navItem in items"
      v-bind="{
        linkTo: $sbutils.linkTo(navItem),
        tag: $sbutils.tag(navItem),
        label: $sbutils.label(navItem),
      }"
    >
      <NjNavItem
        :link-to="$sbutils.linkTo(navItem)"
        :tag="$sbutils.tag(navItem)"
        :label="$sbutils.label(navItem)"
        class="cursor-pointer hover:text-gray-400"
      />
    </slot>
  </nav>
</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
