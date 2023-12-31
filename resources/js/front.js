 /**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import router from './router';
import App from './components/App.vue';
import projects from './projects';

const root = new Vue({
    el: '#root',
    render: h => h(App),
    router: router
});

export {projects}