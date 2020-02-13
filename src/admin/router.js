import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import about from './compons/pages/about.vue';
import works from './compons/pages/works.vue';
import reviews from './compons/pages/reviews.vue';
import login from './compons/pages/login.vue';

const routes = [
    {
        path: '/',
        component: about
    },
    {
        path: '/works',
        component: works
    },
    {
        path: '/reviews',
        component: reviews
    },
    {
        path: '/login',
        component: login
    }
];

export default new VueRouter({ base: "/admin/", routes });

