import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "./layout/Layout.vue";
import Login from "./pages/Login.vue";
import Inicio from "./pages/Inicio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: require("./pages/Home").default,
      },
      {
        path: "/tareas",
        name: "tareas",
        component: require("./pages/Tareas").default,
      },
      {
        path: "/equipo",
        name: "equipo",
        component: require("./pages/Equipo").default,
      },
      {
        path: "/usuarios",
        name: "usuarios",
        component: require("./pages/Usuarios").default,
      }
    ],
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/",
    component: Inicio
  },
];

const router = new VueRouter({
  routes,
});

export default router;
