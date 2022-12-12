import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from "./components/HomePage.vue"
import AboutPage from "./components/AboutPage.vue"
import NotFoundPage from "./components/NotFoundPage.vue"

Vue.use(VueRouter)


const routes = new VueRouter({
    linkExactActiveClass: 'active',
    mode: 'history',
    routes: [
        {path: '/', component: HomePage, name: 'home'},
        {path: '/about', component: AboutPage, name: 'about'},
        {path: '*', component: NotFoundPage},
    ]
});


export default routes;