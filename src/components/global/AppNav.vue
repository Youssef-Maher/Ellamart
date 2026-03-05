<template>
  <div class="nav-bar">
    <v-app-bar color="#161880" height="fit-content" class="px-4">
      <v-container fluid>
        <v-row>
          <v-col cols="3" class="d-flex align-center pa-0">
            <router-link to="/"
              ><img src="@/assets/images/logo.png" alt=""
            /></router-link>
          </v-col>
          <v-col cols="8" class="d-flex align-center pa-0"
            ><ul class="d-flex text-white">
              <li v-for="category in categories" :key="category.title">
                <router-link
                  :to="{
                    name: 'products_category',
                    params: { category: category.route },
                    query: { title: category.title },
                  }"
                  style="color: white; text-decoration: none"
                  >{{ category.title }}</router-link
                >
              </li>
            </ul>
          </v-col>
          <v-col cols="1">
            <div class="parent text-white d-flex justify-end">
              <div
                class="cart d-flex flex-column align-center"
                @click="openCart"
              >
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
            </div>
          </v-col>
        </v-row>
      </v-container>
      <!-- <v-app-bar-nav-icon @click="openCart"></v-app-bar-nav-icon> -->
    </v-app-bar>
  </div>
</template>
<script>
import { productsModule } from "@/stores/products";
import { cartStore } from "@/stores/cart";
import { mapState } from "pinia";
export default {
  inject: ["Emitter"],
  data() {
    return {
      selectedLang: [{ lang: "EN", currency: "USD" }],
      langs: [
        { lang: "EN", currency: "USD" },
        { lang: "DE", currency: "EURO" },
      ],
    };
  },
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
  computed: {
    ...mapState(productsModule, ["categories"]),
    ...mapState(cartStore, ["cartItems"]),
  },
};
</script>
<style lang="scss">
.parent {
  div {
    i::before {
      font-size: 30px;
      color: #fec422;
    }
  }
}
.wishlist,
.sign-in,
.cart,
.help,
.lang {
  cursor: pointer;
}
li {
  list-style: none;
  padding: 0 10px;
}
.help {
  gap: 5px;
}
input {
  caret-color: #000000;
}
input:focus::placeholder {
  opacity: 0;
}

input::placeholder {
  transition: opacity 0.3s ease;
}
</style>
