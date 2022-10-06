import { mount } from '@vue/test-utils'
import CreateUserView from '../../views/CreateUserView.vue'

describe('CreateUserView', () => {
  it('renders properly', () => {
    const wrapper = mount(CreateUserView,)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.classes()).toContain('bg-opacity-10')
    expect(wrapper.classes()).toContain('border')
    expect(wrapper.classes()).toContain('m-4')
    expect(wrapper.text()).toContain('Titulo')

    const userForm = wrapper.find('#userForm')
    expect(userForm.exists()).toBe(true)
    expect(userForm.isVisible()).toBe(true)
    expect(userForm.classes()).toContain('bg-opacity-10')
    expect(userForm.classes()).toContain('border')
    expect(userForm.classes()).toContain('m-4')
    expect(userForm.text()).toContain('Titulo')

    const form = wrapper.find('form')
    expect(form.exists()).toBe(true)
    expect(form.isVisible()).toBe(true)
    expect(form.text()).toContain('Titulo')

    const container = wrapper.find('.container')
    expect(container.exists()).toBe(true)
    expect(container.isVisible()).toBe(true)
    expect(container.text()).toContain('Titulo')

    const row = wrapper.find('.row')
    expect(row.exists()).toBe(true)
    expect(row.isVisible()).toBe(true)
    expect(row.text()).toContain('Titulo')

    const m2 = wrapper.find('.m-2')
    expect(m2.exists()).toBe(true)
    expect(m2.isVisible()).toBe(true)
    expect(m2.classes()).toContain('col-md-6')
    expect(m2.text()).toContain('Titulo')

    const formgroup = wrapper.find('.form-group')
    expect(formgroup.exists()).toBe(true)
    expect(formgroup.isVisible()).toBe(true)
    expect(formgroup.text()).toContain('Titulo')

    const label = wrapper.find('label')
    expect(label.exists()).toBe(true)
    expect(label.isVisible()).toBe(true)
    expect(label.text()).toContain('Titulo')

    const h4 = wrapper.find('h4')
    expect(h4.exists()).toBe(true)
    expect(h4.isVisible()).toBe(true)
    expect(h4.text()).toContain('Titulo')

    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
    expect(input.isVisible()).toBe(true)
    expect(input.attributes('type')).toContain('text')
    expect(input.classes()).toContain('form-control-lg')
    expect(input.classes()).toContain('m-4')
    expect(input.attributes('placeholder')).toContain('Aqui')


    const select = wrapper.find('select')
    expect(select.exists()).toBe(true)
    expect(select.isVisible()).toBe(true)
    expect(select.classes()).toContain('form-control-lg')
    expect(select.classes()).toContain('m-4')

    const option = wrapper.find('option')
    expect(option.exists()).toBe(true)
    expect(option.isVisible()).toBe(true)
    expect(option.attributes('value')).toContain('')
    expect(option.text()).toContain('Para')



    const col = wrapper.find('.col-md-8')
    expect(col.exists()).toBe(true)
    expect(col.isVisible()).toBe(true)
    expect(col.classes()).toContain('col-md-8')
    expect(col.classes()).toContain('m-2')

    const textarea = wrapper.find('textarea')
    expect(textarea.exists()).toBe(true)
    expect(textarea.isVisible()).toBe(true)
    expect(textarea.classes()).toContain('form-control-lg')
    expect(textarea.classes()).toContain('m-4')

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.isVisible()).toBe(true)
    expect(img.classes()).toContain('img-fluid')
    expect(img.classes()).toContain('m-4')
    expect(img.classes()).toContain('w-50')

    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.isVisible()).toBe(true)
    expect(button.classes()).toContain('btn')
    expect(button.classes()).toContain('border')
    expect(button.classes()).toContain('border-danger')

    const borderDark = wrapper.find('.border-dark')
    expect(borderDark.exists()).toBe(true)
    expect(borderDark.isVisible()).toBe(true)
    expect(borderDark.classes()).toContain('btn')
    expect(borderDark.classes()).toContain('border')
    expect(borderDark.classes()).toContain('border-dark')
    expect(borderDark.classes()).toContain('m-2')
    expect(borderDark.attributes('type')).toContain('button')


  })
})