import NjSection from '@nujek/ui/components/atoms/NjSection'
export default {
  title: 'NjSection',
  component: NjSection
}

export const Boxed = (arg, { argTypes }) => ({
  components: { NjSection },
  // props: Object.keys(argTypes),
  template: '<NjSection variant="boxed">My Boxed Section</NjSection>'
})

export const FullWidth = (arg, { argTypes }) => ({
  components: { NjSection },
  // props: Object.keys(argTypes),
  template: '<NjSection variant="fullWidth">My Full Width Section</NjSection>'
})

export const WithBgImage = (arg, { argTypes }) => ({
  components: { NjSection },
  // props: Object.keys(argTypes),
  template:
    '<NjSection :fixedClasses="{ bgImage: \'aspect-ratio-16/9\' }" bgImage="http://placekitten.com/400/300" variant="boxedBgImage">My Section</NjSection>'
})

export const Landingpage = (arg, { argTypes }) => ({
  components: { NjSection },
  // props: Object.keys(argTypes),
  template: `
  <div>
      <NjSection class="bg-blue-200 py-4 md:py-16" variant="boxed">
        <h1 class="text-4xl">Welcome to my Website</h1>
        <p class="text-2xl">
          This is my fresh website
        </p>
      </NjSection>
      <NjSection class="py-4 md:py-16" variant="boxed">
        <h2 class="text-2xl">About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
        </p>
      </NjSection>
      <NjSection class="py-4 md:py-16" variant="boxed">
        <iframe style="width:100%; height: 600px" src="https://www.youtube.com/embed/IDsCtDRV2uA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </NjSection>
      <NjSection class="py-4 md:py-16" variant="fullWidth">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 xl_gap-8">
          <div class="flex">
            <div class="py-4 md:p-12">
              <h3 class="text-2xl">Card 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="py-4 md:p-12">
              <h3 class="text-2xl">Card 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="py-4 md:p-12">
              <h3 class="text-2xl">Card 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
        </div>
      </NjSection>
  </div>`
})
