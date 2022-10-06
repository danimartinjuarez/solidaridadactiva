import { shallowMount } from '@vue/test-utils'
import NosotrosTextView from '../../src/components/NosotrosTextView.vue'
import NosotrosView from '../../src/views/NosotrosView.vue'
import router from '../../src/router/index.js'
import ButtonBackVue from '../../src/components/ButtonBack.vue'


describe('NosotrosView.vue', () => {
  it('NosotrosTextView component\'s exist', async () => {
    router.push('/Nosotros')
    await router.isReady()
    const wrapper = shallowMount(NosotrosView, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.findComponent(NosotrosTextView).exists()).toBe(true)
    expect(wrapper.findComponent(NosotrosTextView).isVisible()).toBe(true)

  })
  it('ButtonBackVue component\'s exist', async () => {
    router.push('/Nosotros')
    await router.isReady()
    const wrapper = shallowMount(NosotrosView, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.findComponent(ButtonBackVue).exists()).toBe(true)
    expect(wrapper.findComponent(ButtonBackVue).isVisible()).toBe(true)

  })
})
