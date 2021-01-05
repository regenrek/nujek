import NjBurger from './NjBurger'
export default {
  title: 'NjBurger',
  component: NjBurger
}

export const Burger = (arg, { argTypes }) => ({
  components: { NjBurger },
  // props: Object.keys(argTypes),
  template: '<NjBurger v-bind="$props" />'
})
