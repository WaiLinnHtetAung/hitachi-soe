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
    },
    {
        path: '/products/offload',
        name: 'OffLoad',
        component: () =>
            import ('@/views/Transformer/OffLoad.vue')
    },
    {
        path: '/products/onload',
        name: 'OnLoad',
        component: () =>
            import ('@/views/Transformer/OnLoad.vue')
    },
    {
        path: '/products/poweroffload',
        name: 'PowerOffLoad',
        component: () =>
            import ('@/views/Transformer/PowerOff.vue')
    },
    {
        path: '/products/poweronload',
        name: 'PowerOnLoad',
        component: () =>
            import ('@/views/Transformer/PowerOn.vue')
    },
    {
        path: '/products/panels/main-distribution-panel',
        name: "MainDistributionPanel",
        component: () =>
            import ('@/views/Panel/MainDistributionPanel.vue')
    },
    {
        path: '/products/panels/acb',
        name: 'ACB',
        component: () =>
            import ('@/views/Panel/ACB.vue')
    },
    {
        path: '/products/panels/package-substation',
        name: "PackageSubstation",
        component: () =>
            import ('@/views/Panel/PackageSubstation.vue')
    },
    {
        path: '/products/panels/vcb',
        name: 'VCB',
        component: () =>
            import ('@/views/Panel/VCB.vue')
    },
    {
        path: '/about-us/:slug',
        name: 'About Us',
        component: () =>
            import ('@/views/AboutUs.vue'),
        props: true
    },
    {
        path: '/career/:slug',
        name: 'Career',
        component: () =>
            import ('@/views/Career.vue'),
        props: true
    },
    {
        path: '/customers',
        name: 'Customers',
        component: () =>
            import ('@/views/Customer.vue')
    },
    {
        path: '/products',
        name: '/Products',
        component: () =>
            import ('@/views/mobileMenu/ProductsMenu.vue')
    },
    {
        path: '/mobile/about-us',
        name: 'Mobile About Us',
        component: () =>
            import ('@/views/mobileMenu/AboutUs.vue')
    },
    {
        path: '/mobile/career',
        component: () =>
            import ('@/views/mobileMenu/Career.vue')
    },
    {
        path: '/comming',
        component: () =>
            import ('@/views/Comming.vue')
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router