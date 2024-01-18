import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-hitachi-soe",
    component: () => import("@/views/AboutHitachi.vue"),
  },
  {
    path: "/amorphous-transformer",
    name: "AmorphousTransfer",
    component: () => import("@/views/Amorphous.vue"),
  },
  {
    path: "/certificates",
    name: "Certificates",
    component: () => import("@/views/Certificates.vue"),
  },
  {
    path: "/certificates/14001",
    name: "14001",
    component: () => import("@/views/certificates/14001.vue"),
  },
  {
    path: "/certificates/9001",
    name: "9001",
    component: () => import("@/views/certificates/9001.vue"),
  },
  {
    path: "/products/offload",
    name: "OffLoad",
    component: () => import("@/views/Transformer/OffLoad.vue"),
  },
  {
    path: "/products/onload",
    name: "OnLoad",
    component: () => import("@/views/Transformer/OnLoad.vue"),
  },
  {
    path: "/products/poweroffload",
    name: "PowerOffLoad",
    component: () => import("@/views/Transformer/PowerOff.vue"),
  },
  {
    path: "/products/poweronload",
    name: "PowerOnLoad",
    component: () => import("@/views/Transformer/PowerOn.vue"),
  },
  {
    path: "/products/highEfficient",
    component: () => import("@/views/Transformer/HighEfficient.vue"),
  },
  {
    path: "/products/panels/:slug",
    name: "Panels",
    component: () => import("@/views/Panel.vue"),
    props: true,
  },
  {
    path: "/products/services/:slug",
    name: "Services",
    component: () => import("@/views/Services.vue"),
    props: true,
  },
  {
    path: "/about-us/:slug",
    name: "About Us",
    component: () => import("@/views/AboutUs.vue"),
    props: true,
  },
  {
    path: "/career/:slug",
    name: "Career",
    component: () => import("@/views/Career.vue"),
    props: true,
  },
  {
    path: "/customers",
    name: "Customers",
    component: () => import("@/views/Customer.vue"),
  },
  {
    path: "/products",
    name: "/Products",
    component: () => import("@/views/mobileMenu/ProductsMenu.vue"),
  },
  {
    path: "/mobile/about-us",
    name: "Mobile About Us",
    component: () => import("@/views/mobileMenu/AboutUs.vue"),
  },
  {
    path: "/mobile/news-events",
    component: () => import("@/views/mobileMenu/NewsEvents.vue"),
  },
  {
    path: "/news-events/events",
    name: "Events",
    component: () => import("@/views/Events.vue"),
  },
  {
    path: "/news-events/news",
    name: "News",
    component: () => import("@/views/News.vue"),
  },
  {
    path: "/news-detail/:id",
    name: "NewsDetail",
    component: () => import("@/views/NewsDetail.vue"),
    props: true,
  },
  {
    path: "/mobile/career",
    component: () => import("@/views/mobileMenu/Career.vue"),
  },
  {
    path: "/comming",
    component: () => import("@/views/Comming.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
