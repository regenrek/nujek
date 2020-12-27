import { state, mutations, getters, actions } from '../store/nav'

export default (context) => {
  const { store } = context

  store.registerModule(
    'nav',
    {
      namespaced: true,
      state: () => ({
        navOpen: false
      }),
      actions: {
        toggle({ commit }) {
          commit('toggle')
        }
      },
      mutations: {
        toggle(state) {
          state.navOpen = !state.navOpen
        }
      },
      getters: {}
    },
    { preserveState: !!store.state['nav'] }
  )
}
