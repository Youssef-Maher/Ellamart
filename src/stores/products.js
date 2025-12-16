import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    categoryProducts: [],
    categories: [
      { title: "Smartphones", route: "smartphones" },
      { title: "Laptops", route: "laptops" },
      { title: "Motorcycle", route: "motorcycle" },
      { title: "Fragrances", route: "fragrances" },
      { title: "Sunglasses", route: "sunglasses" },
      { title: "Automotive", route: "automotive" },
      { title: "Tops", route: "tops" },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => (this.flashDeals = res.data.products.slice(0, 8)))
        .catch((err) => console.log(err));
    },

    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.categoryProducts = res.data));
    },
  },
});
