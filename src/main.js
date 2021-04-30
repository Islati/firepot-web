import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import store from "./store";

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import VueCookies from "vue-cookies";

Vue.use(VueToast, {
    position: 'top-right'
});

Vue.use(VueCookies);

// import VuetifyConfirm from 'vuetify-confirm';

// Vue.use(VuetifyConfirm);

Vue.config.productionTip = false

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app')
