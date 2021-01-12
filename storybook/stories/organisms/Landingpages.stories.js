import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  title: 'Landingpages'
}

export const HeroNav = (arg, { argTypes }) => ({
  template: `
    <div>
        <NjNav class="bg-white" v-bind="$props">
            <template #logo>
                <nuxt-link to="#" class="block">
                    <img src="/svg/signet_black.svg" alt="Logo" class="w-12 lg:w-14 block" />
                </nuxt-link>
            </template>    

            <template #nav>
                <nav class="hidden lg:flex justify-center items-center h-80">
                    <nuxt-link class="transition-colors duration-300 mx-2 lg:mx-4 xl:mx-6 uppercase hover:text-blue-600" to="#">Home</nuxt-link>
                    <nuxt-link class="transition-colors duration-300 mx-2 lg:mx-4 xl:mx-6 uppercase hover:text-blue-600" to="#">About</nuxt-link>
                    <nuxt-link class="transition-colors duration-300 mx-2 lg:mx-4 xl:mx-6 uppercase hover:text-blue-600" to="#">Contact</nuxt-link>
                </nav>
            </template>

            <template #burger-menu>
                <NjBurger class="lg:hidden" :open.sync="isOpenBurger" />
            </template>
        </NjNav>
    
        <NjVideoBackground
        v-if="true"
        src="https://www.macherjek.at/app/uploads/macherjek_showreel.mp4"
        class="h-520 lg:h-680 xl:h-768"
      >
        <NjSection class="px-5 md:px-0 md:max-w-3xl h-full flex items-center" variant="boxed">
            <div class="md:max-w-xl">
              <NjHeading
                tag="h1"
                class="text-4xl md:text-7xl lg:text-9xl font-bold lg:mt-32 md:mt-14 mt-8 uppercase text-white"
              >
                Awesome Nujek Framework
              </NjHeading>
              <NjHeading
                tag="h2"
                class="text-xl md:text-2xl lg:text-4xl text-white"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </NjHeading>
            </div>
            <img
              src="/svg/arrow-down.svg"
              class="w-6 md:w-6 mt-20 lg:mt-40 inline-block"
            />
          </NjSection>
      </NjVideoBackground>

      <NjSidebar :show.sync="isOpenBurger" />
    </div>
  `,
  computed: {
    ...mapState({
      navOpen: (state) => state.nav.navOpen
    }),
    ...mapGetters({
      mainNavigation: 'nav/main'
    }),
    isOpenBurger: {
      get: function () {
        return this.navOpen
      },
      set: function (val) {
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
