import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NormasText from '../NormasText.vue'

describe('NormasText', () => {
  it('renders properly', () => {
    const wrapper = mount(NormasText,)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.text()).toContain('NORMAS')
    const p = wrapper.find('p')
    expect(p.exists()).toBe(true)
    expect(p.isVisible()).toBe(true)
   
    const div = wrapper.find('div')
    expect(div.exists()).toBe(true)
    expect(div.isVisible()).toBe(true)
   
    const h1 = wrapper.find('h1')
    expect(h1.exists()).toBe(true)
    expect(h1.isVisible()).toBe(true)
    expect(h1.text()).toContain('NORMAS')
    expect(h1.classes()).toContain('text-center')

  })
})