import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    mobilePhones: [],
    laptops: [],
    mensWatches: [],
    categoryProducts: [],
    singleProduct: [],
    categories: [
      { title: "Smartphones", route: "smartphones" },
      { title: "Laptops", route: "laptops" },
      { title: "Mens Watches", route: "mens-watches" },
      { title: "Fragrances", route: "fragrances" },
      { title: "Sunglasses", route: "sunglasses" },
      { title: "Sports Accessories", route: "sports-accessories" },
      { title: "Tops", route: "tops" },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then(
          (res) => (
            (this.flashDeals = res.data.products.slice(10, 18)),
            (this.newProducts = res.data.products.slice(4, 9))
          )
        )
        .catch((err) => console.log(err));
    },
    async getMobilePhones() {
      await axios
        .get("https://dummyjson.com/products/category/smartphones")
        .then((res) => (this.mobilePhones = res.data.products.slice(0, 8)))
        .catch((err) => console.log(err));
    },
    async getLaptops() {
      await axios
        .get("https://dummyjson.com/products/category/laptops")
        .then((res) => (this.laptops = res.data.products.slice(0, 8)))
        .catch((err) => console.log(err));
    },
    async getMensWatches() {
      await axios
        .get("https://dummyjson.com/products/category/mens-watches")
        .then((res) => (this.mensWatches = res.data.products.slice(0, 8)))
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
