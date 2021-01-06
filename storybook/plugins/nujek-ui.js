import Vue from 'vue'
import Nujek from '@nujek/ui/plugin'
import NjSection from '~/packages/ui/components/atoms/NjSection.vue'
import NjBurger from '~/packages/ui/components/atoms/NjBurger.vue'

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
          wrapper: 'bg-teal-200 flex justify-center',
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
      classes: {
        wrapper: ''
      }
    }
  }
}

Vue.use(Nujek, settings)
