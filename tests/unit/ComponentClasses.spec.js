import { shallowMount } from '@vue/test-utils'

import NjSection from '../packages/ui/dist/runtime/components/atoms/NjSection'

describe('ComponentClasses', () => {
  it('usually will return the default classes', () => {
    const wrapper = shallowMount(NjSection, {
      propsData: {
        classes: ['bg-red-200'],
        variants: {
          boxed: 'bg-blue-100',
          container: 'bg-yellow-100'
        }
      }
    })

    expect(wrapper.vm.$el.className).toBe('bg-red-200')
  })
})
