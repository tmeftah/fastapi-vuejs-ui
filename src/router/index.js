import Vue from "vue";
import VueRouter from "vue-router";
import Customers from "../views/Customers.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/Index"),
    children: [
      {
        path: "/customers",
        name: "Customers",
        component: Customers,
      },
      {
        path: "/user/:id",
        name: "User",
        component: User,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
