<template>
  <div class="cart-page pa-5">
    <v-container>
      <v-row>
        <v-col>
          <p>Home > Shopping Cart</p>
          <v-progress-linear
            color="light-blue"
            height="10"
            model-value="10"
            striped
          ></v-progress-linear>
          <p>Only $9858 Away from Free shipping!</p>
          <v-row>
            <v-col cols="9">
              <v-table v-for="product in cartItems" :key="product.id">
                <thead>
                  <tr>
                    <th class="text-left">PRODUCT</th>
                    <th class="text-left">PRICE</th>
                    <th class="text-left">QUANTITY</th>
                    <th class="text-left">TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img :src="product.thumbnail" width="130" />
                      <h3>{{ product.title }}</h3>
                      <p>{{ product.description }}</p>
                    </td>
                    <td>${{ product.price }}</td>
                    <td>{{ product.quantity }}</td>
                    <td>${{ product.price * product.quantity }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { cartStore } from "@/stores/cart";

export default {
  name: "CartPage",

  computed: {
    ...mapState(cartStore, ["cartItems"]),
  },
};
</script>
