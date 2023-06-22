import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from "./components/pages/HomePage.vue"
import ProjectsPage from "./components/pages/ProjectsPage.vue"
import ComponentsPage from "./components/pages/ComponentsPage.vue"
import AboutPage from "./components/pages/AboutPage.vue"
import ContactsPage from "./components/pages/ContactsPage.vue"
import PrivacyPolicyPage from "./components/pages/PrivacyPolicyPage.vue"
import CookiePolicyPage from "./components/pages/CookiePolicyPage.vue"
import NotFoundPage from "./components/pages/NotFoundPage.vue"


Vue.use(VueRouter)


const routes = new VueRouter({
    linkExactActiveClass: 'active',
    mode: 'history',
    routes: [
        {path: '/', component: HomePage, name: 'home'},
        {path: '/projects', component: ProjectsPage, name: 'projects'},
        {path: '/components', component: ComponentsPage, name: 'components'},
        {path: '/about', component: AboutPage, name: 'about'},
        {path: '/contacts', component: ContactsPage, name: 'contacts'},
        {path: '/privacy-policy', component: PrivacyPolicyPage, name: 'privacy-policy'},
        {path: '/cookie-policy', component: CookiePolicyPage, name: 'cookie-policy'},
        {path: '*', component: NotFoundPage},
    ]
});


export default routes;