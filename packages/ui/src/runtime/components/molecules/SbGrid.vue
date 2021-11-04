<template>
  <div class="sb-grid grid">
    <slot name="header" />

    <component
      :is="tag"
      v-if="collection.length"
      class="grid gap-x-6 gap-y-10"
      :class="gridCasses"
    >
      <template v-for="item in collection">
        <slot name="card" v-bind="{ item }">
          <li :key="item.uuid" class="w-full">
            <component
              :is="gridItem(item) | dashify"
              v-if="gridItem(item)"
              :blok="{ ...item.content }"
            />
            <pre v-else>
              {{ item.name }}
            </pre>
          </li>
        </slot>
      </template>
    </component>

    <slot v-else name="no-results">
      <div class="h-20 flex justify-center items-center">
        <h5>Keine Beiträge gefunden</h5>
      </div>
    </slot>

    <slot name="footer" v-bind="{ isLastPage, nextPage }">
      <template v-if="!blok.is_finite">
        <div v-if="!isLastPage" class="flex justify-center">
          <button
            label="Load More"
            :disabled="$fetchState.pending"
            @click="nextPage"
          >
            {{ $fetchState.pending ? "..." : "Mehr laden" }}
          </button>
        </div>
      </template>
    </slot>
  </div>
</template>
<script>
import get from "lodash.get";
const POST_TYPE = "projekte";
const SORT_BY = "created_at:desc";
const RESOLVE_RELATIONS = "";
const PER_PAGE = 12;
const RESOLVE_LINKS = "";
const CARD_STYLE_DEFAULT = "NjCard";
const GRID_COLUMNS = Array.from({ length: 12 }, (_, i) => i + 1);

export default {
  name: "CustomSbGrid",
  props: {
    blok: {
      type: Object,
      default: () => ({
        post_type: "",
        posts_per_page: 12,
        sort_by: "",
        resolve_relations: "",
        is_finite: false,
        style: CARD_STYLE_DEFAULT,
        excluding_slugs: "",
      }),
    },
    searchTerm: {
      type: String,
      default: "",
    },
    filterQuery: {
      type: Object,
      default: () => ({}),
    },
    excludeByPropValue: {
      type: Object,
      default: () => ({}),
    },
    columns: {
      type: Number,
      default: 3,
      validator: (value) => GRID_COLUMNS.includes(value),
    },
    disableFetch: {
      type: Boolean,
      default: false,
    },
    dataSource: {
      type: Array,
      default() {
        return [];
      },
    },
    tag: {
      type: String,
      validator: (value) => ["ul", "div", "section"].includes(value),
      default: "ul",
    },
    debugMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      collection: [],
      extendCollection: false,
      pagination: {
        page: 1,
        total: 0,
      },
    };
  },
  async fetch() {
    if (this.disableFetch) {
      return;
    }
    const { $storyblok, error } = this.$nuxt.context;
    await $storyblok
      .getStoryCollection(this.blok.post_type || POST_TYPE, {
        excluding_slugs: this.blok.excluding_slugs,
        sort_by: this.blok.sort_by || SORT_BY,
        resolve_relations: this.blok.resolve_relations || RESOLVE_RELATIONS,
        resolve_links: this.blok.resolve_links || RESOLVE_LINKS,
        per_page: this.blok.posts_per_page || PER_PAGE,
        search_term: this.searchTerm,
        filter_query: this.filterQuery,
        page: this.pagination.page,
      })
      .then((res) => {
        this.pagination.page++;
        const { stories } = res;
        this.pagination.total = res.total;
        if (this.extendCollection) {
          this.collection.push(...stories);
          this.extendCollection = false;

          return;
        }

        this.collection = stories;
        try {
          if (this.excludeByPropValue) {
            this.collection = this.collection.filter(
              function (item) {
                if (
                  item.content[this.excludeByPropValue.name] !==
                  this.excludeByPropValue.value
                ) {
                  return item;
                }
              }.bind(this)
            );
          }
        } catch (error) {
          console.error(error);
        }
        if (debugMode) {
          console.log("Collection fetched", this.collection);
        }
      })
      .catch((res) => {
        error(res);
      });
  },
  computed: {
    gridCasses() {
      const mdCols = `md:grid-cols-${parseFloat(0.5 * this.columns).toFixed()}`;
      const lgCols = `lg:grid-cols-${this.columns}`;
      return [mdCols, lgCols];
    },
    isLastPage() {
      return this.collection.length === this.pagination.total;
    },
    cardName() {
      return this.blok.style || CARD_STYLE_DEFAULT;
    },
  },
  watch: {
    blok: {
      deep: true,
      handler() {
        this.pagination.page = 1;
        this.$fetch();
      },
    },
    searchTerm: {
      handler() {
        this.pagination.page = 1;
        this.$fetch();
      },
    },
    filterQuery: {
      deep: true,
      handler() {
        // TODO: Install lodash and compare newValue to oldValue
        this.pagination.page = 1;
        this.$fetch();
      },
    },
    "pagination.total": {
      deep: true,
      handler(newVal) {
        this.$emit("totalStories", newVal);
      },
    },
  },
  methods: {
    nextPage() {
      this.extendCollection = true;
      this.$fetch();
    },
    image(item) {
      return get(item, "content.featuredImage", null);
    },
    gridItem(item) {
      return get(item, "content.component", null);
    },
    checkIfExcludedByProp(item) {
      return (
        item[this.excludeByPropValue.name] ===
        this.this.excludeByPropValue.value
      );
    },
  },
};
</script>
