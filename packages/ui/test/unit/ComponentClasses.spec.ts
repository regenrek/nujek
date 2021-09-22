/**
 * @jest-environment jsdom
 */

import { shallowMount, Wrapper } from '@vue/test-utils'

import type Vue from 'vue'
import NjSection from '~/runtime/components/atoms/NjSection.vue'

describe('ComponentClasses', () => {
  let wrapper: Wrapper<Vue>

  it('it will return the override classes', () => {
    wrapper = shallowMount(NjSection, {
      propsData: {
        classes: {
          wrapper: 'bg-red-200',
          container: 'bg-blue-100'
        }
      }
    })

    expect(wrapper.classes()).toContain('bg-red-200')
    expect(wrapper.find('div > div').classes()).toContain('bg-blue-100')
  })

  it('it will return variant classes', () => {
    const wrapper = shallowMount(NjSection, {
      propsData: {
        variant: 'boxed'
      }
    })

    expect(wrapper.classes()).toContain('flex')
    // container
    expect(wrapper.find('div > div').classes())
      .toContain('mx-auto')
  })

  it('variants: it will return override component classes', () => {
    const wrapper = shallowMount(NjSection, {
      propsData: {
        classes: {
          wrapper: 'bg-red-200',
          container: 'bg-yellow-200'
        },
        variant: 'boxed'
      }
    })

    // wrapper
    // expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('flex')
    // container
    expect(wrapper.find('div > div').classes())
      .toContain('mx-auto')
  })

  it('variants: it will return override components classes with defining a custom variant', () => {
    const wrapper = shallowMount(NjSection, {
      propsData: {
        classes: {
          wrapper: 'bg-red-200'
        },
        variants: {
          demo: {
            wrapper: 'bg-blue-200'
          }
        },
        variant: 'demo'
      }
    })

    // wrapper
    // expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('bg-blue-200')
  })

  it('switch active variant and default classes', async () => {
    const wrapper = shallowMount(NjSection, {
      propsData: {
        classes: {
          wrapper: 'bg-red-200'
        },
        variants: {
          demo: {
            wrapper: 'bg-blue-200',
            container: 'bg-yellow-200'
          },
          demo2: {
            wrapper: 'bg-yellow-200',
            container: 'bg-blue-200'
          }
        },
        variant: 'demo'
      }
    })

    // wrapper
    expect(wrapper.classes()).toContain('bg-blue-200')
    // container
    expect(wrapper.find('div > div').classes())
      .toContain('bg-yellow-200')

    wrapper.setProps({ variant: 'demo2' })

    await wrapper.vm.$nextTick()

    // wrapper
    expect(wrapper.classes()).toContain('bg-yellow-200')
    // container
    expect(wrapper.find('div > div').classes())
      .toContain('bg-blue-200')
  })

  it('doesnt return classes if invalid variant', () => {
    const wrapper = shallowMount(NjSection, {
      propsData: {
        classes: { wrapper: 'bg-red-200' },
        variants: {
          v1: { wrapper: 'bg-blue-100' },
          v2: { wrapper: 'bg-yellow-100' }
        },
        variant: 'invalid'
      }
    })

    expect(wrapper.vm.$el.className).toBe('')
  })

  it('will include both fixed and default classes always', () => {
    const wrapper = shallowMount(NjSection, {
      propsData: {
        fixedClasses: { wrapper: 'transition' },
        classes: { wrapper: 'bg-red-200' }
      }
    })

    const { className } = wrapper.vm.$el

    expect(className.split(' ').sort()).toEqual(['bg-red-200', 'transition'])
  })

  it('will include both fixed and default classes merging array and string', () => {
    const wrapper = shallowMount(NjSection, {
      propsData: {
        fixedClasses: { wrapper: ['transition'] },
        classes: { wrapper: 'bg-red-200' }
      }
    })

    const { className } = wrapper.vm.$el

    expect(className.split(' ').sort()).toEqual(['bg-red-200', 'transition'])
  })

  it('will include both fixed and default classes merging string and array', () => {
    const wrapper = shallowMount(NjSection, {
      propsData: {
        fixedClasses: { wrapper: 'transition' },
        classes: { wrapper: ['bg-red-200'] }
      }
    })

    const { className } = wrapper.vm.$el

    expect(className.split(' ').sort()).toEqual(['bg-red-200', 'transition'])
  })
})
