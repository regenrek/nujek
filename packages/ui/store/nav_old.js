export const registerNavStore = (store, vuex) => {
  store.registerModule(
    vuex.moduleName,
    {
      namespaced: true,
      state: () => ({
        ...(vuex.syncNavOpen ? { navOpen: false } : {})
      }),
      actions: {
        ...(vuex.syncNavOpen
          ? {
              setNavbar({ commit }, openclose) {
                commit('setNavbar', openclose)
              }
            }
          : {}),
        ...(vuex.syncNavOpen
          ? {
              setNavbar({ commit }) {
                commit('toggle')
              }
            }
          : {})
      },
      mutations: {
        ...(vuex.syncNavOpen
          ? {
              setNavbar(state, openclose) {
                state.navOpen = openclose
              }
            }
          : {}),
        ...(vuex.syncNavOpen
          ? {
              toggle(state) {
                state.navOpen = !state.navOpen
              }
            }
          : {})
      },
      getters: {}
    },
    { preserveState: !!store.state[vuex.moduleName] }
  )
}
