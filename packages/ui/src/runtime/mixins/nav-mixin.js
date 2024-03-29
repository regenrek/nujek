import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      navOpen: state => state.nav.navOpen
    }),
    ...mapGetters({
      mainNavItems: 'nav/main',
      mainNavSubItems: 'nav/sub',
      asideNavItems: 'nav/aside',
      mobileNavItems: 'nav/mobile',
      mobileSubNavItems: 'nav/mobileSub',
      footerNavItems: 'nav/footer'
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
