import NjNav from './NjNav'
export default {
  title: 'NjNav',
  component: NjNav
}

export const Burger = (arg, { argTypes }) => ({
  components: { NjNav },
  // props: Object.keys(argTypes),
  template:
    '<NjNav v-bind="$props"><template #burger-menu>BURGER</template></NjNav>'
})
