import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Intro from '../Intro.vue'

describe('Intro', () => {
  it('renders properly', () => {
    const wrapper = mount(Intro,)
    expect(wrapper.text()).toContain('idea')
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.classes()).toContain('intro')
    expect(wrapper.classes()).toContain('intro-text')
    const p= wrapper.find('p')
    expect(p.exists()).toBe(true)
    expect(p.isVisible()).toBe(true)
    expect(p.classes()).toContain('p-4')
  })
})
