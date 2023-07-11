import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/certificates',
        name: 'Certificates',
        component: () =>
            import ('@/views/Certificates.vue'),
    },
    {
        path: '/certificates/14001',
        name: '14001',
        component: () =>
            import ('@/views/certificates/14001.vue')
    },
    {
        path: '/certificates/9001',
        name: '9001',
        component: () =>
            import ('@/views/certificates/9001.vue')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router