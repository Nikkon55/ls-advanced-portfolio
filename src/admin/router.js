import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import about from './compons/pages/about.vue';
import works from './compons/pages/works.vue';
import reviews from './compons/pages/reviews.vue';

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
    }
];

export default new VueRouter({ base: "/admin/", routes });

