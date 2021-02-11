import NjNav from '@nujek/ui/components/molecules/NjNav/NjNav';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  title: 'NjNav',
  component: NjNav,
};

export const DefaultNav = (arg, { argTypes }) => ({
  components: { NjNav },
  template: `
    <div>
      <NjNav class="bg-gray-200" v-bind="$props">
        <template #burger-menu>
          <NjBurger :open.sync="isOpenBurger" />
        </template>
      </NjNav>
    
      <NjSidebar :show.sync="isOpenBurger" />
    </div>
  `,
  computed: {
    ...mapState({
      navOpen: (state) => state.nav.navOpen,
    }),
    ...mapGetters({
      mainNavigation: 'nav/main',
    }),
    isOpenBurger: {
      get() {
        return this.navOpen;
      },
      set(val) {
        this.$store.dispatch('nav/set', val);
      },
    },
  },
  methods: {
    ...mapActions({
      toggleSidebar: 'nav/toggle',
      closeSidebar: 'nav/close',
    }),
  },
});
