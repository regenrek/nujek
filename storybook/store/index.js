import settingsMock from '../mocks/settingsMock'

const actions = {
  async nuxtClientInit ({ dispatch }, ctx) {
    await dispatch('fetchAppSettings', ctx)
  },
  fetchAppSettings ({ dispatch }, ctx) {
    dispatch('nav/setSettings', settingsMock.story.content)
  }
}

export default {
  actions
}
