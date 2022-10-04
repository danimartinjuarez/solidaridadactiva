import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MenuFilter from '../MenuFilter.vue'

describe('MenuFilter', () => {
  it('renders properly', () => {
    const wrapper = mount(MenuFilter,)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.classes()).toContain('list-group')  
    expect(wrapper.classes()).toContain('list-group-horizontal')  
    expect(wrapper.text()).toContain('Para')
    const ul = wrapper.find('ul')
    expect(ul.exists()).toBe(true)
    expect(ul.isVisible()).toBe(true)
    expect(ul.classes()).toContain('list-group')  
    expect(ul.classes()).toContain('list-group-horizontal') 
    expect(ul.text()).toContain('Para')

    const RouterLink = wrapper.find('RouterLink')
    expect(RouterLink.exists()).toBe(true)
    expect(RouterLink.isVisible()).toBe(true)
    expect(RouterLink.classes()).toContain('w-20')  
    expect(RouterLink.classes()).toContain('m-2')
    expect(RouterLink.text()).toContain('Para')

    const li = wrapper.find('li')
    expect(li.exists()).toBe(true)
    expect(li.isVisible()).toBe(true)
    expect(li.classes()).toContain('list-group-item')  
    expect(li.classes()).toContain('text-center') 
    expect(li.classes()).toContain('h5')  
    expect(li.classes()).toContain('border-info') 
    expect(li.classes()).toContain('text-info') 
    expect(li.text()).toContain('Para')

    const li2 = wrapper.find('.border-warning')
    expect(li2.exists()).toBe(true)
    expect(li2.isVisible()).toBe(true)
    expect(li2.classes()).toContain('list-group-item')  
    expect(li2.classes()).toContain('text-center') 
    expect(li2.classes()).toContain('h5')  
    expect(li2.classes()).toContain('border-warning') 
    expect(li2.classes()).toContain('text-warning') 
    expect(li2.text()).toContain('Para')

    const li3 = wrapper.find('.border-secondary')
    expect(li3.exists()).toBe(true)
    expect(li3.isVisible()).toBe(true)
    expect(li3.classes()).toContain('list-group-item')  
    expect(li3.classes()).toContain('text-center') 
    expect(li3.classes()).toContain('h5')  
    expect(li3.classes()).toContain('border-secondary') 
    expect(li3.classes()).toContain('text-secondary') 
    expect(li3.text()).toContain('Otros')

    const li4 = wrapper.find('.border-success')
    expect(li4.exists()).toBe(true)
    expect(li4.isVisible()).toBe(true)
    expect(li4.classes()).toContain('list-group-item')  
    expect(li4.classes()).toContain('text-center') 
    expect(li4.classes()).toContain('h5')  
    expect(li4.classes()).toContain('border-success') 
    expect(li4.classes()).toContain('text-success') 
    expect(li4.text()).toContain('Para')

})})