import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Header from '../Header.vue'

describe('Header', () => {
  it('renders properly', () => {
    const wrapper = mount(Header,)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.text()).toContain('PEQUEÑOS')
    const byType = wrapper.find('img')
    expect(byType.exists()).toBe(true)
    expect(byType.isVisible()).toBe(true)
    expect(byType.classes()).toContain('img-fluid')
  })
})
