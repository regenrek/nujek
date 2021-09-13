import { shallowMount } from '@vue/test-utils'

import NjSection from '../packages/ui/dist/runtime/components/atoms/NjSection'

describe('NjSection', () => {
  it('it renders njsection', () => {
    const wrapper = shallowMount(NjSection)

    expect(wrapper.get('div')).toBeTruthy()
  })

  it('default to div tag', () => {
    const wrapper = shallowMount(NjSection)

    expect(wrapper.vm.$el.tagName).toBe('DIV')
  })

  it('it renders the default slot content', () => {
    const wrapper = shallowMount(NjSection, {
      slots: {
        default: 'lorem ipsum'
      }
    })

    expect(wrapper.vm.$el.children[0].innerHTML).toBe('lorem ipsum')
  })

  it('it will return the override classes', () => {
    const wrapper = shallowMount(NjSection, {
      propsData: {
        fixedClasses: {
          wrapper: 'bg-red-200',
          container: 'bg-blue-100'
        },
        variant: 'boxed'
      }
    })

    expect(wrapper.classes().sort()).toEqual(['bg-red-200', 'flex', 'justify-center'])
    expect(
      wrapper.find('div > div').classes().sort())
      .toEqual(['bg-blue-100', 'max-w-3xl', 'md:px-6', 'mx-auto', 'w-full', 'xl:px-8'])
  })
})
