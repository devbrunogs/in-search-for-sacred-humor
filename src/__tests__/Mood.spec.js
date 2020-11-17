import { shallowMount } from '@vue/test-utils'
import Mood from '@/components/Mood.vue'

const bazComponent = {
    name: 'baz-component',
    template: '<span>baz</span>'
}

describe('Mood Test', () => {
    const wrapper = shallowMount(Mood, {slots: {
        content: bazComponent
    }});

    test('should render', () => {
        expect(wrapper.vm).toBeTruthy()
    })


    test('should mount component inside', () => {
        expect(wrapper.findComponent(bazComponent).exists()).toBeTruthy()
    })
});