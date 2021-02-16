import { NjHeroVideo } from '~nujek-ui/components'

export default {
  title: 'NjHero',
  component: NjHeroVideo
}

export const VideoHero = (arg, { argTypes }) => ({
  components: { NjHeroVideo },
  template: `
      <NjVideoBackground
      v-if="true"
      src="https://www.macherjek.at/app/uploads/macherjek_showreel.mp4"
      class="min-h-screen w-full"
      >
        <div
            class="flex min-h-screen w-full"
        >
        Hero inner...
        </div>
      </NjVideoBackground>
  `
})

export const VideoHeroWithContent = (arg, { argTypes }) => ({
  components: { NjHeroVideo },
  template: `
      <NjVideoBackground
      v-if="true"
      src="https://www.macherjek.at/app/uploads/macherjek_showreel.mp4"
      class="h-520 lg:h-680 xl:h-768"
    >
      <div
        class="h-520 lg:h-680 xl:h-768 flex content-center relative z-10 md:flex-row flex-col"
      >
        <div
          class="max-w-80 bg-transparent self-center text-center"
        >
          <NjBurger :classes="{ 
            wrapper: 'nj-burger',
            button: 'relative block border-0 focus:outline-none',
            bar: 'bg-white'}" />
        </div>
        <div
          class="flex-auto border-l border-white md:pl-16 md:pt-6 mt-4 md:mt-0"
        >
          <div class="flex flex-col items-center md:items-start">
            <img src="/svg/signet_white.svg" class="w-10" alt="Logo" />
            <NjHeading
              tag="h1"
              class="text-4xl md:text-7xl lg:text-9xl font-bold lg:mt-32 md:mt-14 mt-8 uppercase text-white"
            >
              Awesome Nujek Framework
            </NjHeading>
            <img
              src="/svg/arrow-down.svg"
              class="w-6 md:w-8 md:w-6 mt-20 lg:mt-40 inline-block"
            />
          </div>
        </div>
    </NjVideoBackground>
  `
})

export const VideoHeroWithContent2 = (arg, { argTypes }) => ({
  components: { NjHeroVideo },
  template: `
      <NjVideoBackground
      v-if="true"
      src="https://www.macherjek.at/app/uploads/macherjek_showreel.mp4"
      class="h-520 lg:h-680 xl:h-768"
    >
      <NjSection class="px-5 md:px-0 md:max-w-3xl h-full flex items-center" variant="boxed">
          <div class="md:max-w-xl">
            <NjHeading
              tag="h1"
              class="text-4xl md:text-7xl lg:text-9xl font-bold lg:mt-32 md:mt-14 mt-8 uppercase text-white"
            >
              Awesome Nujek Framework
            </NjHeading>
            <NjHeading
              tag="h2"
              class="text-xl md:text-2xl lg:text-4xl text-white"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </NjHeading>
          </div>
          <img
            src="/svg/arrow-down.svg"
            class="w-6 md:w-6 mt-20 lg:mt-40 inline-block"
          />
        </NjSection>
    </NjVideoBackground>
  `
})
