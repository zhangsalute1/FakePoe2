import { createWebHashHistory, createRouter } from 'vue-router'

import login from "@/components/login/index.vue"
import layout from "@/components/layout/index.vue"

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
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
