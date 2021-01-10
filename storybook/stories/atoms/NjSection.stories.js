import NjSection from '@nujek/ui/components/atoms/NjSection'
export default {
  title: 'NjSection',
  component: NjSection
}

export const Section = (arg, { argTypes }) => ({
  components: { NjSection },
  // props: Object.keys(argTypes),
  template: '<NjSection variant="boxed">My Section</NjSection>'
})
