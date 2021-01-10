import NjBurger from '@nujek/ui/components/atoms/NjBurger'
export default {
  title: 'NjBurger',
  component: NjBurger
}

export const Burger = (arg, { argTypes }) => ({
  components: { NjBurger },
  // props: Object.keys(argTypes),
  template: '<NjBurger v-bind="$props" />'
})
