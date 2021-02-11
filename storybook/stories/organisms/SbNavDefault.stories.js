import SbNavDefault from '@nujek/ui/components/organisms/Nav/SbNavDefault';
// import Vuex from 'vuex'
// import registerNavStore from '@ui/store/nav'
// import settingsMock from '../../mocks/settingsMock'

// const store = new Vuex.Store()
// registerNavStore(store)
// store.dispatch('nav/setSettings', settingsMock)

export default {
  title: 'SbNavDefault',
  component: SbNavDefault,
};

export const NavDefault = (arg, { argTypes }) => ({
  components: { SbNavDefault },
  // props: Object.keys(argTypes),
  template: '<SbNavDefault v-bind="$props" />',
});
