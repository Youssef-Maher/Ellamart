import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    categoryProducts: [],
    singleProduct: [],
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
        .then(
          (res) => (
            (this.flashDeals = res.data.products.slice(0, 8)),
            console.log(this.flashDeals)
          )
        )
        .catch((err) => console.log(err));
    },

    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.categoryProducts = res.data));
    },
    async getSingleProduct(productId) {
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => (this.singleProduct = res.data));
    },
  },
});
