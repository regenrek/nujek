import Vue from 'vue'
// import tailwindConfig from '../tailwind.config'
import Nujek from '~nujek-ui/plugin.js'
import { NjImage } from '~nujek-ui/components'

const settings = {
}

Vue.use(Nujek, settings)
Vue.component('NjImage', NjImage)
