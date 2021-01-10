import settingsMock from '../mocks/settingsMock'

console.log('init store ')
const actions = {
  async nuxtClientInit({ dispatch }, ctx) {
    await dispatch('fetchAppSettings', ctx)
  },
  fetchAppSettings({ dispatch }, ctx) {
    console.log('inside fetchAppSettings')
    dispatch('nav/setSettings', settingsMock.story.content)
  }
}

export default {
  actions
}
