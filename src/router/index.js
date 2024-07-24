import { createWebHashHistory, createRouter } from 'vue-router'

import login from "@/components/login/index.vue"
import layout from "@/components/layout/index.vue"
import register from "@/components/register/index.vue"
const routes = [
    {
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/Layout',
        name: 'layout',
        component: layout
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
