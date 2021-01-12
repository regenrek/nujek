import Vue from 'vue'
import Nujek from '@nujek/ui/plugin'
import NjSection from '@nujek/ui/components/atoms/NjSection.vue'
import NjBurger from '@nujek/ui/components/atoms/NjBurger.vue'
// import NjNav from '@ui/components/molecules/NjNav/NjNav.vue'

const settings = {
  NjSection: {
    component: NjSection,
    props: {
      classes: {
        wrapper: 'bg-blue-600',
        container: 'bg-red-600'
      },
      variants: {
        boxed: {
          wrapper: 'bg-gray-200 flex justify-center',
          container: 'bg-red-400 max-w-2xl'
        },
        fullWidth: {
          wrapper: 'bg-yellow-200 w-full',
          container: 'bg-yellow-400 w-full'
        }
      }
    }
  },
  NjBurger: {
    component: NjBurger,
    props: {
      fixedClasses: {
        wrapper: ''
      },
      classes: {
        bar: 'bg-yellow-500'
      }
    }
  }
  // NjNav: {
  //   component: NjNav,
  //   props: {
  //     fixedClasses: {
  //       wrapper: 'w-full fixed border border-yellow'
  //     },
  //     classes: {
  //       wrapper: 'bg-gray-200'
  //     },
  //     variants: {
  //       simple: {
  //         wrapper: 'bg-red-200'
  //       }
  //     }
  //   }
  // }
}

Vue.use(Nujek, settings)
