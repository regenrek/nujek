import NjNav from '@nujek/ui/components/molecules/NjNav/NjNav'
export default {
  title: 'NjNav',
  component: NjNav
}

export const Nav = (arg, { argTypes }) => ({
  components: { NjNav },
  // props: Object.keys(argTypes),
  template: '<NjNav v-bind="$props" />'
})
