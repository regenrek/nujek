const types = {
  SET_NAV: 'SET_NAV',
  TOGGLE_NAV: 'TOGGLE_NAV'
}

const state = () => ({
  navOpen: false
})

// getters
const getters = {}

const mutations = {
  [types.SET_NAV](state, status) {
    state.navOpen = status
  },
  [types.TOGGLE_NAV](state) {
    state.navOpen = !state.navOpen
  }
}
const actions = {
  openNav({ commit }) {
    commit(types.SET_NAV, true)
  },
  closeNav({ commit }) {
    commit(types.SET_NAV, false)
  },
  setNav({ commit }, active) {
    commit(types.SET_NAV, active)
  },
  toggle({ commit }) {
    commit(types.TOGGLE_NAV)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
