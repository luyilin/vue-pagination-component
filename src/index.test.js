import { mount } from 'vue-test-utils'
import VPagination from './'

test('it works', () => {
  const wrapper = mount(VPagination)
  expect(wrapper.isVueInstance()).toBe(true)
})
