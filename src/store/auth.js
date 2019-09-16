import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export const auth = new Vuex.Store({
    state: {
        foo: "bar"
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    },
    actions: {},
    getters: {}
})