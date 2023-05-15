import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "./layout/Layout.vue";

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
];

const router = new VueRouter({
  routes,
});

export default router;
