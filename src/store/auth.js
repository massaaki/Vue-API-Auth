import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex)
axios.defaults.baseURL = "http://auth_api.test/api";

export const auth = new Vuex.Store({
    state: {
        token: localStorage.getItem("access_token") || null,
        foo: ""
    },
    mutations: {
        setFoo(state, payload) {
            state.foo = payload;
        },
        retrieveveToken(state, payload) {
            state.token = payload;
        },
        destroyToken(state) {
            state.token = null;
        },
    },
    actions: {
        getFoo(context) {
            axios.get('/foo').then(response => {
                context.commit("setFoo", response.data);
            }).catch(error => {});
        },
        retrieveToken(context, credentials) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/login", {
                        username: credentials.username,
                        password: credentials.password
                    })
                    .then(response => {
                        const token = response.data.access_token;
                        localStorage.setItem("access_token", token);
                        context.commit("retrieveveToken", token);
                        resolve(response);

                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        register(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/register", {
                        name: data.name,
                        email: data.email,
                        password: data.password
                    })
                    .then(response => {
                        const token = response.data.access_token;
                        localStorage.setItem("access_token", token);
                        context.commit("retrieveveToken", token);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        destroyToken(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
            if (context.getters.loggedIn) {
                return new Promise((resolve, reject) => {
                    axios
                        .post("/logout")
                        .then(response => {
                            localStorage.removeItem("access_token");
                            context.commit("destroyToken");
                            resolve(response);
                        })
                        .catch(error => {
                            localStorage.removeItem("access_token");
                            context.commit("destroyToken");
                            reject(error);
                        });
                });
            }
        },
    },
    getters: {
        loggedIn(state) {
            return state.token !== null;
        }
    }
})