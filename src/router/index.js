import { createMemoryHistory, createRouter } from 'vue-router'

import layout from '@/components/layout/index.vue';

const routes = [
    {
        path: '/',
        name: 'layout',
        component: layout
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

export default router;
