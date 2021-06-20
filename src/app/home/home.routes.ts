import { RouteRecordRaw } from "vue-router";

const homeRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "./home.component.vue"),
  },
];

export default homeRoutes;
