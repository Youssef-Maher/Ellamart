<template>
  <div class="app-footer">
    <v-footer :app="true" absolute>
      <v-container>
        <v-row>
          <v-col cols="3">
            <h3>CATEGORIES</h3>
            <v-list-item v-for="category in categories" :key="category.title">
              <router-link
                :to="{
                  name: 'products_category',
                  params: { category: category.route, title: category.title },
                }"
                style="color: black; text-decoration: none"
                >{{ category.title }}
              </router-link>
            </v-list-item>
          </v-col>
          <v-col cols="3">
            <h3>FURTHER INFO.</h3>
            <v-list-item>About us</v-list-item>
            <v-list-item>Gift Certificates</v-list-item>
            <v-list-item>Theme Styles</v-list-item>
            <v-list-item>Contact us</v-list-item>
            <v-list-item>Blog</v-list-item>
            <v-list-item>Brands</v-list-item>
            <v-list-item>Sitemap</v-list-item>
          </v-col>
          <v-col cols="3">
            <h3>CUSTOMER SERVICE</h3>
            <v-list-item>Help & FAQs</v-list-item>
            <v-list-item>Terms of Conditions</v-list-item>
            <v-list-item>Privacy Policy</v-list-item>
            <v-list-item>Online Returns Policy</v-list-item>
            <v-list-item>Rewards Program</v-list-item>
            <v-list-item>Rebate Center</v-list-item>
            <v-list-item>Partners</v-list-item>
          </v-col>
          <v-col cols="3">
            <img src="@/assets/images/logo-black.webp" alt="" />
            <div class="icons">
              <v-icon>mdi-facebook</v-icon>
              <v-icon>mdi-twitter</v-icon>
              <v-icon>mdi-instagram</v-icon>
              <v-icon>mdi-youtube</v-icon>
              <v-icon>mdi-pinterest</v-icon>
            </div>
          </v-col>
        </v-row>
        <div class="copyright justify-center text-center">
          <h5>
            Made by
            <a href="https://youssef-maher.github.io/portfolio/" target="_blank"
              >Yousef Maher</a
            >
            - 2025
          </h5>
          <h5>
            Course By Eng. Ahmed El Masry -
            <a href="https://www.youtube.com/@vuejs-wisdom" target="_blank"
              >Vuejs Wisdom</a
            >
          </h5>
        </div>
      </v-container>
    </v-footer>
  </div>
</template>
<script>
import { productsModule } from "@/stores/products";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
};
</script>
