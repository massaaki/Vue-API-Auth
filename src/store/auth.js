import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex)
axios.defaults.baseURL = "http://auth_api.test/api";

export const auth = new Vuex.Store({
    state: {
        foo: ""
    },
    mutations: {
        setFoo(state, payload) {
            state.foo = payload;
        }
    },
    actions: {
        getFoo(context) {
            axios.get('/foo').then(response => {
                context.commit("setFoo", response.data);
            }).catch(error => {});
        }
    },
    getters: {}
})