import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TellMeJoke from '@/views/TellMeJoke.vue'
import RouterButton from "@/components/RouterButton.vue";
import Mood from "@/components/Mood.vue";
import Modal from "@/components/Modal.vue";

const localVue = createLocalVue()

localVue.use(Vuex)

describe('TellMeJoke Test', () => {
    let actions, state, store, wrapper

    beforeAll(() => {
        actions = {
            setModalMessage: jest.fn(),
            toggleModal: jest.fn()
        }
        state = {
            showModal: true
        }
        store = new Vuex.Store({
            state,
            actions
        })
    })

    test('should render', () => {
        wrapper = mount(TellMeJoke, { store, localVue })
        expect(wrapper.vm).toBeTruthy()
    })

    test('should have called setModalMessage', () => {
        expect(actions.setModalMessage).toHaveBeenCalledTimes(1)
    })

    test('should render Modal', () => {
        expect(wrapper.findComponent(Modal).exists()).toBe(true)
    })

    test('should render Mood', () => {
        expect(wrapper.findComponent(Mood).exists()).toBe(true)
    })

    test('should render RouterButton', () => {
        expect(wrapper.findComponent(RouterButton).exists()).toBe(true)
    })

    test('should have called toggleModal on destroy', () => {
        wrapper.destroy();
        expect(actions.toggleModal).toHaveBeenCalledTimes(1)
    })
});