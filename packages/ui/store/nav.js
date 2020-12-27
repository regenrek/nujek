export const registerNavStore = (store) => {
  store.registerModule(
    'nav',
    {
      namespaced: true,
      state: () => ({
        navOpen: false,
        settings: {}
      }),
      actions: {
        toggle({ commit }) {
          commit('toggle')
        },
        setSettings({ commit }, payload) {
          commit('setSettings', payload)
        },
        open({ commit }) {
          commit('set', true)
        },
        close({ commit }) {
          commit('set', false)
        }
      },
      mutations: {
        toggle(state) {
          state.navOpen = !state.navOpen
        },
        set(state, payload) {
          state.navOpen = payload
        },
        setSettings(state, payload) {
          state.settings = payload
        }
      },
      getters: {
        mobile(state) {
          return state.settings.mobile_navigation
            ? state.settings.mobile_navigation
            : state.settings.navigation
        },
        mobileSub(state) {
          return state.settings.mobile_subnavigation
        },
        main(state) {
          return state.settings.navigation
        },
        sub(state) {
          return state.settings.subnavigation
        },
        footer(state) {
          return state.settings.footer_navigation
        }
      }
    },
    { preserveState: !!store.state['nav'] }
  )
}
