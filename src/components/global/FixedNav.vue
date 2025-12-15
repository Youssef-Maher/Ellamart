<template>
  <div>
    <v-app-bar class="fixed-nav" color="#161880" style="position: fixed">
      <v-container fluid>
        <v-row>
          <v-col cols="2">
            <router-link to="/"
              ><img src="@/assets/images/logo.png" alt=""
            /></router-link>
          </v-col>
          <v-col cols="7" class="d-flex align-center">
            <ul class="d-flex text-white">
              <li v-for="category in categories" :key="category.title">
                <router-link
                  :to="{
                    name: 'products_category',
                    params: { category: category.route, title: category.title },
                  }"
                >
                  {{ category.title }}
                </router-link>
              </li>
            </ul>
          </v-col>
          <v-col
            cols="3"
            class="d-flex justify-end align-center"
            style="gap: 30px"
          >
            <div class="wishlist d-flex flex-column align-center">
              <v-icon class="my-2">mdi-heart-outline</v-icon>
            </div>
            <div class="sign-in d-flex flex-column align-center">
              <v-icon class="my-2">mdi-account-outline</v-icon>
            </div>
            <div class="cart d-flex flex-column align-center" @click="openCart">
              <v-badge
                location="right top"
                content="2"
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
export default {
  inject: ["Emitter"],
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
};
</script>
<style></style>
