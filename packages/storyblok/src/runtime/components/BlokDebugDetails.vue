<template>
  <div class="mt-6 text-xs font-mono inline-block">
    <div class="bg-gray-50 rounded-lg p-4">
      <p>
        <ul>
          <li class="pb-4">
            Hi there!
          </li>
          <li class="pb-1">
            1. This is just a <strong>placeholder</strong>. It represents a blok from Storyblok CMS.
          </li>
          <li class="pb-4">
            2. Create a new component file (`<strong>components/{{ componentName }}.vue`</strong>) and fill it with all the logic and content needed.
          </li>
          <li class="pb-1">
            Well, before I forget. Every component will expose a <strong>`blok`</strong> prop object where you can find all your Storyblok fields.
          </li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blokProps: {
      type: Object,
      default: () => {}
    },
    componentName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
