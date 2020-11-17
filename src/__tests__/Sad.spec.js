import { shallowMount } from '@vue/test-utils'
import Sad from '@/views/Sad.vue'
import RouterButton from "@/components/RouterButton.vue";
import Mood from "@/components/Mood.vue";

describe('Sad Test', () => {
    let wrapper

    beforeAll(() => {
        wrapper = shallowMount(Sad)
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