import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import homeRoutes from "@/app/home/home.routes";

const routes: RouteRecordRaw[] = [...homeRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
