import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/auth/Login'

Vue.use(Router);

/*
let entryUrl = null;

const loginGuard = async(to, from, next) => {

};
 */

const router = new Router({
    routes:[
        {
            path:'/',
            alias:'/login',

        }
    ]
})