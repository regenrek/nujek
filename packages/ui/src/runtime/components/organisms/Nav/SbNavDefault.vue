<template>
  <NjNav>
    <template #logo>
      <div class="w-40 lg:w-48">
        <nuxt-link to="/" class="block">
          Logo 2
        </nuxt-link>
      </div>
    </template>

    <template #burger-menu>
      <NjBurger :open.sync="isOpenBurger" />
    </template>

    <template #nav>
      <!-- main nav desktop -->
      <nav class="hidden md:flex justify-center items-center nj-nav-height">
        <template v-for="nav_item in mainNavigation">
          <nuxt-link
            v-if="nav_item.link && nav_item.link.linktype === 'story'"
            :key="nav_item._uid"
            :to="`/${nav_item.link.cached_url}`"
            class="cursor-pointer transition-color duration-700 mx-2 lg:mx-4 xl:mx-6 h-20 uppercase letter-space flex items-center"
            exact-active-class="navbar-item--active"
          >
            {{ nav_item.name || 'Mehr erfahren' }}
          </nuxt-link>
          <a
            v-else-if="nav_item.link && nav_item.link.linktype === 'url'"
            :key="nav_item._uid"
            :href="nav_item.link.url"
            class="cursor-pointer"
          >{{ nav_item.name || 'Mehr erfahren' }}</a>
        </template>
      </nav>
    </template>
  </NjNav>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import NjNav from '../../molecules/NjNav/NjNav'

export default {
  components: {
    NjNav
  },
  computed: {
    ...mapState({
      navOpen: state => state.nav.navOpen
    }),
    ...mapGetters({
      mainNavigation: 'nav/main'
    }),
    isOpenBurger: {
      get () {
        return this.navOpen
      },
      set (val) {
        this.$store.dispatch('nav/set', val)
      }
    }
  },
  methods: {
    ...mapActions({
      toggleSidebar: 'nav/toggle',
      closeSidebar: 'nav/close'
    })
  }
}
</script>
