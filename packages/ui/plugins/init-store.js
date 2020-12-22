import { registerNavStore } from '../store/nav'

const vuex = {
  moduleName: 'nav',
  syncNavOpen: true
}

export default async (context) => {
  const { store } = context
  console.log('registerNavStore', vuex, store)

  registerNavStore(store, vuex)
}
