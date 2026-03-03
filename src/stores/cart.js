import { defineStore } from "pinia";

export const cartStore = defineStore("cartStore", {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addItem(item) {
      let itemExists = false;
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id === item.id) {
          this.cartItems[i].quantity += item.quantity;
          itemExists = true;
          break;
        }
      }
      if (!itemExists) {
        this.cartItems.push(JSON.parse(JSON.stringify(item)));
      }
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
    },
    getCartItems() {
      if (localStorage.getItem("cart-items")) {
        this.cartItems = JSON.parse(localStorage.getItem("cart-items"));
      }
    },
    deleteItem(itemId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
    },
    setItemQuantity() {
      localStorage.setItem("cart-items", JSON.stringify(this.cartItems));
    },
    clearCart() {
      this.cartItems = [];
      localStorage.removeItem("cart-items");
    },
  },
});
