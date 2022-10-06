import { mount } from '@vue/test-utils'
import HomeView from '../../views/HomeView.vue'

describe('HomeView', () => {
  it('renders properly', () => {
    const wrapper = mount(HomeView,)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
    

    const div = wrapper.find('div')
    expect(div.exists()).toBe(true)
    expect(div.isVisible()).toBe(true)


    

  })
})