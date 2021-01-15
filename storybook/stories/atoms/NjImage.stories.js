import NjImage from '@nujek/ui/components/atoms/NjImage'
export default {
  title: 'NjImage',
  component: NjImage
}

export const Image = (arg, { argTypes }) => ({
  components: { NjImage },
  template: `
  <NjImage :classes="{aspectRatio: 'aspect-ratio-16/9'}" src="http://placekitten.com/400/300" />`
})
