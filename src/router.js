import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "./layout/Layout.vue";
import Login from "./pages/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: require("./pages/Home").default,
      },
    ],
  },
  {
    path: "/login",
    component: Login
  },
];

const router = new VueRouter({
  routes,
});

export default router;
