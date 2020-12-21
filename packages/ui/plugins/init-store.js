import { registerNavStore } from '../store/nav'

const vuex = {
  moduleName: 'nav',
  syncNav: true
}

export default async (context) => {
  const { store } = context
  registerNavStore(store, vuex)
}
