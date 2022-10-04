import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ButtonBack from '../ButtonBack.vue'

describe('ButtonBack', () => {
  it('renders properly', () => {
    const wrapper = mount(ButtonBack,)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.text()).toContain('Volver')
    expect(wrapper.classes()).toContain('d-flex')  
    expect(wrapper.classes()).toContain('justify-content-center')  
    expect(wrapper.classes()).toContain('back') 
    const router= wrapper.find('.btn')
    expect(router.classes()).toContain('btn') 
    expect(router.classes()).toContain('border-info') 
    expect(router.exists()).toBe(true)
    expect(router.isVisible()).toBe(true)
    expect(router.text()).toContain('Volver')

  })
})
