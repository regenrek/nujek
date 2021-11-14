<template>
  <div>
    <slot name="header" />

    <component
      :is="tag"
      v-if="isLoaded"
    >
      <div v-if="collection.length">
        <template v-for="item in filteredCollection">
          <slot
            v-bind="item"
          >
            <Blok :blok="item" />
          </slot>
        </template>
      </div>
      <slot v-else name="no-results">
        <div class="py-6 flex justify-center items-center">
          <h5>Keine Einträge gefunden</h5>
        </div>
      </slot>
    </component>

    <slot
      name="pagination"
      v-bind="{
        loadMore,
        nextPage: paginationData.nextPage,
        currentPage: paginationData.currentPage,
        total: paginationData.total
      }"
    >
      <component
        :is="paginationComponent"
        v-if="showPagination"
        v-bind="{pending: $fetchState.pending, paginationData}"
        @load-more="loadMore"
      />
    </slot>
  </div>
</template>
    </slot>
  </div>
</template>
<script>
import defu from 'defu'
const PaginationTypes = {
  INFINITE: 'infinite',
  NUMERIC: 'numeric',
  NONE: 'none'
}

// @TODO move to sbutils
const addTrailingSlash = (str) => {
  return str.replace(/\/?(\?|#|$)/, '/$1')
}

export default {
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    path: {
      type: String,
      default: ''
    },
    paginationType: {
      type: String,
      default: 'infinite',
      validator: value => [...Object.values(PaginationTypes)].includes(value)
    },
    filterQuery: {
      type: Object,
      default: () => ({})
    },
    excludeByPropValue: {
      type: [Boolean, Object],
      default: false
    },
    disableFetch: {
      type: Boolean,
      default: false
    },
    dataSource: {
      type: Array,
      default () {
        return []
      }
    },
    tag: {
      type: String,
      validator: value => ['ul', 'div', 'section'].includes(value),
      default: 'ul'
    },
    postsPerPageClientOnly: {
      type: Number,
      default: 12
    },
    filterClientOnly: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      collection: [],
      initialLoad: true,
      paginationData: {
        currentPage: 0,
        nextPage: 1,
        total: 0
      },
      paginationTypes: PaginationTypes
    }
  },
  async fetch () {
    if (this.isFetchDisabled) {
      return true
    }

    const options = defu(this.options, {
      starts_with: addTrailingSlash(this.path),
      sort_by: 'created_at:desc',
      per_page: this.filterClientOnly ? 100 : 25,
      page: this.paginationData.nextPage
    })

    const res = await this.$storyapi.get('cdn/stories', options)

    if (res.total > 0 && res.data?.stories.length) {
      const stories = typeof this.$listeners.afterFetchCollection === 'function'
        ? await this.$listeners.afterFetchCollection(res.data.stories)
        : res.data.stories

      this.paginationData.currentPage++
      this.paginationData.nextPage++
      this.paginationData.total = res.total

      switch (this.paginationType) {
        case PaginationTypes.INFINITE:
          this.collection.push(...stories)
          break
        case PaginationTypes.NUMERIC:
          this.collection = stories
          break
        default:
          break
      }

      this.initialLoad = true
    }
  },
  computed: {
    isLoaded () {
      const isloaded = (!this.disableFetch && (!this.$fetchState.pending || this.initialLoad)) || (this.disableFetch && true)
      return isloaded
    },
    isFetchDisabled () {
      return this.disableFetch || this.dataSource.length
    },
    isLastPage () {
      return this.filteredCollection.length === this.paginationData.total
    },
    filteredCollection () {
      return this.collection.slice(0, this.paginationData.currentPage * this.postsPerPageClientOnly)
    },
    showPagination () {
      return this.isPaginationType(this.paginationTypes.INFINITE) &&
      !this.isLastPage &&
      ((this.filterClientOnly && this.postsPerPageClientOnly > 0) || !this.filterClientOnly)
    },
    paginationComponent () {
      return `${this.paginationType.charAt(0).toUpperCase() + this.paginationType.slice(1)}Pagination`
    }
  },
  methods: {
    loadMore () {
      this.filterClientOnly ? (this.paginationData.nextPage++ && this.paginationData.currentPage++) : this.$fetch()
    },
    checkIfExcludedByProp (item) {
      return (
        item[this.excludeByPropValue.name] ===
        this.this.excludeByPropValue.value
      )
    },
    isPaginationType (type) {
      return this.paginationType === type
    }
  }
}
</script>
