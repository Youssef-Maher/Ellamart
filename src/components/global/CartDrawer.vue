<template>
  <div class="cart-drawer">
    <v-navigation-drawer
      v-model="drower"
      location="right"
      temporary
      :width="380"
      class="pa-6"
    >
      <h2>Shopping Cart</h2>
      <span>1 item</span>
      <v-progress-linear
        color="light-blue"
        height="10"
        model-value="10"
        striped
      ></v-progress-linear>
      <p>Only {{ `$1000` }} Away from Free shipping!</p>
      <div v-for="item in cartItems" :key="item.id">
        <v-btn @click="deleteItem(item.id)">Delete</v-btn>
        <v-card elevation="0">
          <v-row>
            <v-col cols="4">
              <img
                :src="item.thumbnail"
                class="w-100"
                style="height: 200px; object-fit: cover"
              />
            </v-col>
            <v-col cols="8">
              <v-card-title class="card-title pl-0 pb-1"
                >{{
                  item.title.split(" ").length <= 4
                    ? item.title
                    : item.title.split(" ").slice(0, 4).join(" ") + " ..."
                }}
              </v-card-title>
              <v-card-text class="description pl-0 pb-1">
                {{
                  item.description.split(" ").length <= 10
                    ? item.description
                    : item.description.split(" ").slice(0, 12).join(" ") +
                      " ..."
                }}
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
        <v-card-text>Quantity: {{ item.quantity }}</v-card-text>
        <v-card-text
          >Total: ${{
            Math.ceil(
              item.price - item.price * (item.discountPercentage / 100)
            ) * item.quantity
          }}</v-card-text
        >
        <div class="counter">
          <v-icon
            @click="item.quantity > 1 ? item.quantity-- : (item.quantity = 1)"
            >mdi-minus</v-icon
          >
          <input type="number" v-model="item.quantity" />
          <v-icon @click="item.quantity++">mdi-plus</v-icon>
        </div>
      </div>
      <v-card-action>
        <v-btn>Checkout</v-btn>
        <v-btn>View Cart</v-btn>
      </v-card-action>
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
    ...mapActions(cartStore, ["getCartItems", "deleteItem"]),
  },
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drower = true;
    });
    this.getCartItems();
  },
};
</script>
<style lang="scss">
.cart-drawer {
  .counter {
    border: 1px solid rgba(117, 117, 117, 0.5);
    width: fit-content;
    border-radius: 30px;
    padding: 5px;
    input {
      outline: none;
      border: none;
      text-align: center;
      width: 100px;
    }
  }
}
</style>
