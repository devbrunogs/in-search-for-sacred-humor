import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Modal from "@/components/Modal.vue";

const localVue = createLocalVue()
const bazComponent = {
    name: 'baz-component',
    template: '<span>baz</span>'
}

localVue.use(Vuex)

describe('Modal Test', () => {
    let actions, state, store, wrapper

    beforeAll(() => {
        actions = {
            setModalMessage: jest.fn(),
            toggleModal: jest.fn()
        }
    })

    afterAll(() => {
        wrapper && wrapper.destroy()
    })

    test('should not render if show modal is false', () => {
        state = {
            showModal: false
        }
        store = new Vuex.Store({
            state,
            actions
        })

        wrapper = mount(Modal, { store, localVue })

        expect(wrapper.find("div").exists()).toBeFalsy()
        wrapper.destroy()
    })

    test('should render if show modal is true', () => {
        state = {
            showModal: true
        }
        store = new Vuex.Store({
            state,
            actions
        })

        wrapper = mount(Modal, 
            { 
                store, 
                localVue, 
                slots: {
                    modalAction: bazComponent
                }
            }
        )

        expect(wrapper.find("div").exists()).toBeTruthy()
    })
    
    test('should mount component inside', () => {
        expect(wrapper.findComponent(bazComponent).exists()).toBeTruthy()
    })
});