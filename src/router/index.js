import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products/:category/:title",
    name: "products_category",
    component: () => import("@/views/ProductsCategory.vue"),
  },
  {
    path: "/products/product-detail",
    name: "product_detail",
    component: () => import("@/views/ProductDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
