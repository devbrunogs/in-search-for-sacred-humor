import Vue from 'vue'
import Vuex from 'vuex'
import request from "request"

Vue.use(Vuex)

export const state = {
    showModal: false,
    modalMessage: undefined
}

export const mutations = {
    setModalMessage(state, message) {
        state.modalMessage = message;
    },
    toggleModal(state, show) {
        state.showModal = show;
    }
}

export const actions = {
    /**
     * Request a joke to the API, set the result as modal message and set the modal state  
     */
    setModalMessage({commit}) {
        const options = {
            url: 'https://geek-jokes.sameerkumar.website/api?format=json',
            method: 'GET'
        }
        let result;

        request(options, (err, response, body) => {
            if(!err && response.statusCode == 200) {
                result = JSON.parse(body);   
                commit("setModalMessage", result.joke);
                commit("toggleModal", true);
            }
        });
    },
    /**
     * Set the modal state  
     */
    toggleModal({commit}, show) {
        commit("toggleModal", show);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
