import Vue from 'vue';
import Router from 'vue-router';
// import store from "./store";

/* Views */
import Login from './views/auth/Login'
import Register from "./views/auth/Register";
import StoreOverview from "./views/store/StoreOverview";

Vue.use(Router);

// let entryUrl = null;
//
// let loginGuard = async (to, from, next) => {
//     if (store.getters.isLoggedIn) {
//         if (entryUrl) {
//             const url = entryUrl;
//             entryUrl = null;
//             return next(url);
//         } else {
//             next();
//         }
//     } else {
//         entryUrl = to.path;
//         next("/");
//     }
// };

const router = new Router({
    routes: [
        {
            path: '/',
            alias: '/login',
            component: Login,
            name: 'login',
            meta: {
                guest: true
            },
        },
        {
            path: "/register",
            alias: "/sign-up",
            component: Register,
            name: 'register',
            meta: {
                guest: true
            }
        },
        {
            path: "/store",
            alias: '/home',
            component: StoreOverview,
            meta: {
                guest: false
            } // beforeEnter: loginGuard
        }
    ]
});

export default router;