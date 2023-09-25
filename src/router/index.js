// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/shop",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Shop",
        component: () =>
          import(/* webpackChunkName: "shop" */ "@/views/Shop.vue"),
      },
    ],
  },
  {
    path: "/about",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/About.vue"),
      },
    ],
  },
  {
    path: "/contact",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Contact",
        component: () =>
          import(/* webpackChunkName: "shop" */ "@/views/Contact.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
