import NjSection2 from '@ui/components/atoms/NjSection'
export default {
  title: 'NjSection2',
  component: NjSection2
}

export const Section2 = (arg, { argTypes }) => ({
  components: { NjSection2 },
  // props: Object.keys(argTypes),
  template: '<NjSection2 variant="boxed">My Section</NjSection2>'
})
