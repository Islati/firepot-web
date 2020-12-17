import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/auth/Login'
import Register from "./views/auth/Register";

Vue.use(Router);

/*
let entryUrl = null;

const loginGuard = async(to, from, next) => {

};
 */

const router = new Router({
    routes: [
        {
            path: '/',
            alias: '/login',
            component: Login,
            name: 'login',
            meta: {
                guest: true
            }
        },
        {
            path: "/register",
            alias: "/sign-up",
            component: Register,
            name: 'register',
            meta: {
                guest: true
            }
        }
    ]
});

export default router;