import { shallowMount } from '@vue/test-utils'
import Default from '@/views/Default.vue'
import RouterButton from "@/components/RouterButton.vue";
import Mood from "@/components/Mood.vue";

describe('Default Test', () => {
    let wrapper

    beforeAll(() => {
        wrapper = shallowMount(Default)
    })

    test('should render', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    test('should render Mood', () => {
        expect(wrapper.findComponent(Mood).exists()).toBe(true)
    })

    test('should render RouterButton', () => {
        expect(wrapper.findComponent(RouterButton).exists()).toBe(true)
    })
});