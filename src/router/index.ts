import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Questions from "../views/Questions.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/:topic", component: Questions },
  //{ path: "/:pathMatch(.*)*", component: NotFound }, // Para rutas no encontradas
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
