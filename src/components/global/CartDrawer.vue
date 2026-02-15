<template>
  <div class="cart-drawer">
    <v-navigation-drawer v-model="drower" location="right" temporary>
      <div v-for="item in cartItems" :key="item.id">
        <h1>{{ item.title }}</h1>
        <span>{{ item.quantity }}</span>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { cartStore } from "@/stores/cart";

export default {
  inject: ["Emitter"],
  data() {
    return {
      drower: false,
    };
  },
  computed: {
    ...mapState(cartStore, ["cartItems"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCartItems"]),
  },
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drower = true;
    });
    this.getCartItems();
  },
};
</script>
