import Vue from 'vue';
import Router from 'vue-router';
import store from "./store";

/* Views */
import StoreOverview from "@/views/store/StoreOverview";
import StoreItem from "@/views/store/StoreItem";
import AgeVerification from "@/views/auth/AgeVerification";
import OrderingInfo from "@/views/store/OrderingInfo";
import PageNotFound from "@/views/PageNotFound";

Vue.use(Router);

/*
TODO:
    * Router guard for admin areas by permission level.
 */

let entryUrl = null;

/**
 * Verification guard that redirects verified users to store page.
 * @param to
 * @param from
 * @param next
 * @returns {Promise<boolean>}
 */
let verifyRouteRedirect = async (to, from, next) => {
    try {
        if (to.path.includes('/verify') || to.path.includes('/login')) {
            if (store.getters.isAgeVerified) {
                next('/store')
                return true;
            } else {
                next();
                return true;
            }
        }
        next()
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * Verification guard that doesn't allow un-authorized users.
 *
 * Checks if the user has their age verification requirement met before redirecting.
 * @param to
 * @param from
 * @param next
 * @returns {Promise<boolean>}
 */
let ageVerificationGuard = async (to, from, next) => {

    try {
        if (store.getters.isAgeVerified) {
            next();
            return true;
        } else {
            entryUrl = to.path;
            next("/verify");
            return false;
        }
    } catch (e) {
        return false;
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
            beforeEnter: verifyRouteRedirect
        },
        {
            path: "/store",
            name: "store",
            alias: '/',
            component: StoreOverview,
            meta: {
                guest: false
            },
            beforeEnter: ageVerificationGuard
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
            beforeEnter: ageVerificationGuard

        },
        {
            path: '/ordering',
            name: 'ordering',
            component: OrderingInfo,
            meta: {
                guest: false
            },
            beforeEnter: ageVerificationGuard
        },
        {
            path: "*",
            // component: PageNotFound
            redirect: '/store',
        }
    ]
});

export default router;