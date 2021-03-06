
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from './routes'
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: routes,
})

import MainTemplate from './containers/MainTemplate.vue'
const app = new Vue({
    router,
    components: {
        MainTemplate,
    },
}).$mount('#app')
