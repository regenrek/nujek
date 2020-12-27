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
    state.showNav = status
  },
  [types.TOGGLE_NAV](state) {
    state.showNav = !state.showNav
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
