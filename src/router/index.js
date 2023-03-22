import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import About from "../views/About.vue";
import Hombre from "../views/Hombre.vue";
import Mujer from "../views/Mujer.vue";
import Search from "../views/Search.vue";
import Verificar from "../views/Verificar.vue";
import ProductDetails from "../views/ProductDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/Hombre",
    name: "Hombre",
    component: Hombre,
    props: true,
  },
  {
    path: "/Mujer",
    name: "Mujer",
    component: Mujer,
    props: true,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    props: true,
  },
  {
    path: "/Verificar",
    name: "Verificar",
    component: Verificar,
    props: true,
  },
  {
    path: "/shop/:gender/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
