import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from "./components/pages/HomePage.vue"
import GalleryPage from "./components/pages/GalleryPage.vue"
import NotFoundPage from "./components/pages/NotFoundPage.vue"

Vue.use(VueRouter)


const routes = new VueRouter({
    linkExactActiveClass: 'active',
    mode: 'history',
    routes: [
        {path: '/', component: HomePage, name: 'home'},
        {path: '/gallery', component: GalleryPage, name: 'gallery'},
        {path: '*', component: NotFoundPage},
    ]
});


export default routes;