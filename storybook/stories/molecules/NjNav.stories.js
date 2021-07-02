import { mapState, mapGetters, mapActions } from 'vuex'
import { NjNav } from '~nujek-ui/components'

export default {
  title: 'NjNav',
  component: NjNav
}

export const DefaultNav = (arg, { argTypes }) => ({
  components: { NjNav },
  template: `
    <div>
      <NjNav :is-open-burger="isOpenBurger" class="bg-gray-200" v-bind="$props">
      </NjNav>
    
      <NjSidebar :show.sync="isOpenBurger" />
    </div>
  `,
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
})
