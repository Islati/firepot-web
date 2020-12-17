import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        authToken: null,
        name: "User",
    },
    getters: {
        isLoggedIn: (state) => {
            if (state.authToken == null) {
                return false;
            }

            return state.authToken.length > 0;
        }
    },
    mutations: {
        setAuthToken(state, token) {
            console.log(`Authentication token set: ${token}`);
            state.authToken = token;
            localStorage.authToken = token;
        },
        logout(state) {
            console.log("Logging Out")
            state.authToken = null;
        }
    },
    actions: {}

})