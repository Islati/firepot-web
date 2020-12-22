import Vue from 'vue';
import Router from 'vue-router';
// import store from "./store";

/* Views */
import Login from './views/auth/Login'
import Register from "./views/auth/Register";
import StoreOverview from "./views/store/StoreOverview";
import StoreItem from "./views/store/StoreItem";
import Cart from './views/store/Cart';
import OrderOverview from "./views/store/OrderOverview";

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
            name: "store",
            alias: '/home',
            component: StoreOverview,
            meta: {
                guest: false
            } // beforeEnter: loginGuard
        },
        {
            path: "/store/item/:itemId",
            name: "store-item",
            component: StoreItem,
            props: {
                default: true
            },
            meta: {
                guest: false
            }
        },
        {
            path: '/store/cart',
            name: 'cart',
            component: Cart,
            meta: {
                guest: false
            }
        },
        {
            path: '/store/order/:orderId',
            name: 'order',
            component: OrderOverview,
            props: {
                default: true
            },
            meta: {
                guest: false
            }
        }
    ]
});

export default router;