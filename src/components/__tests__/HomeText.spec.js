import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeText from '../HomeText.vue'

describe('HomeText', () => {
  it('renders properly', () => {
    const wrapper = mount(HomeText,)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.text()).toContain('Una vez visto el principio de todo')
    const p = wrapper.find('p')
    expect(p.exists()).toBe(true)
    expect(p.isVisible()).toBe(true)
    expect(p.classes()).toContain('p-4')
    const div = wrapper.find('div')
    expect(div.exists()).toBe(true)
    expect(div.isVisible()).toBe(true)
    expect(div.classes()).toContain('intro')
    expect(div.classes()).toContain('intro-text')
    const router = wrapper.find('RouterLink')
    expect(router.exists()).toBe(true)
    expect(router.isVisible()).toBe(true)

  })
})
