import NjImage from '@nujek/ui/components/atoms/NjImage'

export default {
  title: 'NjImage',
  component: NjImage
}

export const Image = (arg, { argTypes }) => ({
  components: { NjImage },
  template: `
  <NjImage :disableLazyLoad="true" :classes="{aspectRatio: 'aspect-ratio-16/9', image: 'object-cover	'}" src="http://placekitten.com/400/300" />`
})

export const ImageLazyLoad = (arg, { argTypes }) => ({
  components: { NjImage },
  template: `
  <NjImage src="http://placekitten.com/400/300" />`
})
