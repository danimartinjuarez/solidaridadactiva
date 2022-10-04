import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Logo from '../Logo.vue'

describe('Logo', () => {
  it('renders properly', () => {
    const wrapper = mount(Logo,)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.classes()).toContain('img-fluid')  
    expect(wrapper.attributes('alt')).toBe('logo')
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.isVisible()).toBe(true)
})})
