import Vue from 'vue';
import Router from 'vue-router';
import store from "./store";

/* Views */
import StoreOverview from "./views/store/StoreOverview";
import StoreItem from "./views/store/StoreItem";
import AgeVerification from "@/views/auth/AgeVerification";
import OrderingInfo from "@/views/info/OrderingInfo";

import VueCookies from "vue-cookies";

Vue.use(Router);

/*
TODO:
    * Router guard for admin areas by permission level.
 */

let entryUrl = null;

let ageGuard = async (to, from, next) => {


    if (store.getters.isAgeVerified) {
        if (entryUrl) {
            const url = entryUrl;
            entryUrl = null;
            return next(url);
        } else {
            next();
        }
    } else {
        entryUrl = to.path;
        next("/verify");
    }
};

const router = new Router({
    routes: [
        {
            path: '/verify',
            alias: '/login',
            component: AgeVerification,
            name: 'verify',
            meta: {
                guest: true
            },
        },
        {
            path: "/store",
            name: "store",
            alias: '/',
            component: StoreOverview,
            meta: {
                guest: false
            },
            beforeEnter: ageGuard
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
            },
            beforeEnter: ageGuard

        },
        {
            path: '/ordering',
            name: 'ordering',
            component: OrderingInfo,
            meta: {
                guest: false
            },
            beforeEnter: ageGuard
        }
    ]
});

export default router;