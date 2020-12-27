import { state, mutations, getters, actions } from '../store/nav'

export default (context) => {
  const { store } = context

  store.registerModule('nav', {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
  })

  console.log('registerNavStore', store)
}
