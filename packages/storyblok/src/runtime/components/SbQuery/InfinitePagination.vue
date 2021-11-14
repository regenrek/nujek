<i18n lang="yaml">
  en:
    LoadMore: "Load more"
  de:
    LoadMore: "Mehr laden"

</i18n>
<template>
  <div
    class="flex justify-center py-4"
  >
    <button
      label="Load More"
      :disabled="pending"
      @click="loadMore"
    >
      {{ pending ? '...' : $t('LoadMore') }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    pending: {
      type: Boolean,
      default: false
    },
    paginationData: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    loadMore () {
      this.$emit('load-more')
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
