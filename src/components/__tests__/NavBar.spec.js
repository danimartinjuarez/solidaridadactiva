import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NavBar from '../NavBar.vue'

describe('NavBar', () => {
  it('renders properly', () => {
    const wrapper = mount(NavBar,)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.classes()).toContain('list-group')  
    expect(wrapper.classes()).toContain('list-group-horizontal') 
    expect(wrapper.classes()).toContain('border-bottom')  
    expect(wrapper.classes()).toContain('border-dark')  
 
    expect(wrapper.text()).toContain('Sobre')
    const ul = wrapper.find('ul')
    expect(ul.exists()).toBe(true)
    expect(ul.isVisible()).toBe(true)
    expect(ul.classes()).toContain('list-group')  
    expect(ul.classes()).toContain('list-group-horizontal')
    expect(ul.classes()).toContain('border-bottom')  
    expect(ul.classes()).toContain('border-dark')  
    expect(ul.text()).toContain('Sobre')

    const RouterLink = wrapper.find('RouterLink')
    expect(RouterLink.exists()).toBe(true)
    expect(RouterLink.isVisible()).toBe(true)
    expect(RouterLink.classes()).toContain('w-20')  
    expect(RouterLink.text()).toContain('Sobre')
    
    const li = wrapper.find('li')
    expect(li.exists()).toBe(true)
    expect(li.isVisible()).toBe(true)
    expect(li.classes()).toContain('list-group-item')  
    expect(li.classes()).toContain('text-center') 
    expect(li.classes()).toContain('h5')  
  
    expect(li.text()).toContain('Sobre')

   

})})