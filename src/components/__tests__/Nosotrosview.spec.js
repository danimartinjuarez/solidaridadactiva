import { mount } from '@vue/test-utils'
import NosotrosView from '../../views/NosotrosView.vue'

describe('NosotrosView', () => {
  it('renders properly', () => {
    const wrapper = mount(NosotrosView,)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
    

    const div = wrapper.find('div')
    expect(div.exists()).toBe(true)
    expect(div.isVisible()).toBe(true)
    expect(div.classes()).toContain('p-5')
    expect(div.classes()).toContain('bg-white')
    expect(div.classes()).toContain('m-4')
    expect(div.classes()).toContain('rounded')
    expect(div.classes()).toContain('textNosotros')
    

  })
})