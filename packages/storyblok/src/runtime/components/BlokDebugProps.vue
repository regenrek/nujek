<template>
  <div class="mt-6 text-xs font-mono inline-block">
    <table class="w-full break-words">
      <tr class="border-b">
        <td class="align-top pl-0 p-2">
          Name
        </td>
        <td class="align-top p-2 pl-4">
          Type
        </td>
        <td class="align-top p-2 pl-4">
          Value
        </td>
      </tr>
      <tr v-for="(prop, index) in blokProps" :key="index" class="border-b border-gray-100">
        <td class="align-top pl-0 p-2">
          `<strong>{{ index }}</strong>`
        </td>
        <td class="align-top p-2 pl-4">
          {{ typeof prop }}
        </td>
        <td class="align-top p-2 pl-4">
          {{ getProp(prop) }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    blokProps: {
      type: Object,
      default: () => {}
    }
  },
  created () {
    console.log('proplist', this.blokProps)
  },
  methods: {
    getProp (prop) {
      return typeof prop === 'object' || Array.isArray(prop) ? JSON.stringify(prop) : prop
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
