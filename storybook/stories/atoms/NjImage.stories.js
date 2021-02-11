import NjImage from '@nujek/ui/components/atoms/NjImage';

export default {
  title: 'NjImage',
  component: NjImage,
};

export const Image = (arg, { argTypes }) => ({
  components: { NjImage },
  template: `
  <div style="max-width: 400px">
  <NjImage :disableLazyLoad="true" :classes="{aspectRatio: 'aspect-ratio-3/4', image: 'object-cover'}" src="https://placekitten.com/400/300" /></div>`,
});

export const ImageLazyLoad = (arg, { argTypes }) => ({
  components: { NjImage },
  template: '<NjImage src="https://placekitten.com/400/300" />',
});
