// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
  },
  {
    path: "/posts",
    component: () => import("@/layouts/default/Posts.vue"),
  },
  {
    path: "/modal",
    component: () => import("@/views/ModalSlider.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
