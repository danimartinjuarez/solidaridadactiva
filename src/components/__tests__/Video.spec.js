import { mount } from '@vue/test-utils'
import Video from '../Video.vue'

describe('Video', () => {
  it('renders properly', () => {
    const wrapper = mount(Video,)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.classes()).toContain('w-100')  
    expect(wrapper.classes()).toContain('d-flex') 
    expect(wrapper.classes()).toContain('justify-content-center')  
    expect(wrapper.classes()).toContain('p-4')  
    const iframe= wrapper.find('iframe')
    expect(iframe.exists()).toBe(true)
    expect(iframe.isVisible()).toBe(true)
    expect(iframe.attributes('width')).toContain('560')
    expect(iframe.attributes('height')).toContain('315')
    expect(iframe.attributes('src')).toContain('https')
    expect(iframe.attributes('title')).toContain('YouTube')
    expect(iframe.attributes('frameborder')).toContain('0')
    expect(iframe.attributes('allow')).toContain('accelerometer')
    expect(iframe.attributes('allow')).toContain('autoplay')
    expect(iframe.attributes('allow')).toContain('clipboard')
    expect(iframe.attributes('allow')).toContain('encrypted')
    expect(iframe.attributes('allow')).toContain('gyroscope')
    expect(iframe.attributes('allow')).toContain('picture')
    expect(iframe.attributes('allowfullscreen')).toContain('')

    
   
    
  })
})