<template>
  <div class="res-nav">
    <v-app-bar color="#161880" style="position: fixed" class="pa-2">
      <v-container fluid>
        <v-row>
          <v-col cols="2" sm="4" class="d-flex align-center">
            <v-icon @click="openMenu()">mdi-menu</v-icon>
          </v-col>
          <v-col cols="8" sm="4" class="text-center">
            <router-link to="/"
              ><img src="@/assets/images/logo.png" alt=""
            /></router-link>
          </v-col>
          <v-col
            cols="2"
            sm="4"
            class="d-flex justify-end align-center"
            style="gap: 30px"
          >
            <div class="cart d-flex flex-column align-center" @click="openCart">
              <v-badge
                location="right top"
                :content="cartItems.length"
                color="blue"
                offset-x="-12"
                offset-y="3"
                style="z-index: 9999"
              ></v-badge>
              <v-icon class="my-2">mdi-cart-outline</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapState } from "pinia";
import { cartStore } from "@/stores/cart";
export default {
  inject: ["Emitter"],
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
    openMenu() {
      this.Emitter.emit("openMenu");
    },
  },
  computed: {
    ...mapState(productsModule, ["categories"]),
    ...mapState(cartStore, ["cartItems"]),
  },
};
</script>
<style></style>
