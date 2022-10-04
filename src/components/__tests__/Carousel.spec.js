import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Carousel from '../Carousel.vue'

describe('Carousel', () => {
  it('renders properly', () => {
    const wrapper = mount(Carousel,)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.text()).toContain('PEQUEÑOS TRIUNFOS')
    const div = wrapper.find('div')
    expect(div.exists()).toBe(true)
    expect(div.isVisible()).toBe(true)
    const byId = wrapper.find('#spinner')
    expect(byId.element.id).toBe('spinner')
    const byType = wrapper.find('img')
    expect(byType.exists()).toBe(true)
    expect(byType.isVisible()).toBe(true)
    const figure = wrapper.find('figure')
    expect(figure.exists()).toBe(true)
    expect(figure.isVisible()).toBe(true)
    const span = wrapper.find('span')
    expect(span.exists()).toBe(true)
    expect(span.isVisible()).toBe(true)
    const h1 = wrapper.find('h1')
    expect(h1.exists()).toBe(true)
    expect(h1.isVisible()).toBe(true)
    expect(byType.classes()).toContain('img-fluid')
    expect(byType.classes()).toContain('w-100')
    expect(byType.classes()).toContain('h-100')
    expect(h1.classes()).toContain('text-center')
    expect(h1.classes()).toContain('text-success')
    expect(span.classes()).toContain('ss-icon')
  })
})
