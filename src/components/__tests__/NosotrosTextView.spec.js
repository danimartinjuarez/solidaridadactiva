import { mount } from '@vue/test-utils'
import NosotrosTextView from '../NosotrosTextView.vue'

describe('NosotrosTextView', () => {
  it('renders properly', () => {
    const wrapper = mount(NosotrosTextView,)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.text()).toContain('NOSOTROS')
    const p = wrapper.find('p')
    expect(p.exists()).toBe(true)
    expect(p.isVisible()).toBe(true)
    expect(p.text()).toContain('Cuando')

    
   
    const h1 = wrapper.find('h1')
    expect(h1.exists()).toBe(true)
    expect(h1.isVisible()).toBe(true)
    expect(h1.text()).toContain('NOSOTROS')

    const h2 = wrapper.find('h2')
    expect(h2.exists()).toBe(true)
    expect(h2.isVisible()).toBe(true)
    expect(h2.text()).toContain('Misión')
  })
})