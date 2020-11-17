import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App Test', () => {
    const wrapper = mount(App);
  
    test('should render', () => {
      expect(wrapper.vm).toBeTruthy()
    })
});