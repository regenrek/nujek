<template>
  <div class="mt-6 text-xs font-mono inline-block w-full">
    <div class="bg-gray-50 rounded-lg p-4 w-full">
      <p>
        <ul>
          <li class="pb-4">
            Hi there!
          </li>
          <li class="pb-1">
            1. This is just a <strong>placeholder</strong>. It represents a <strong>{{ type }}</strong> from Storyblok CMS.
          </li>
          <li class="pb-4">
            2. Create a new component file (`<strong>{{ componentPath }}/{{ componentName }}.vue</strong>`) and fill it with all the logic and content needed.
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
    },
    componentPath: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
