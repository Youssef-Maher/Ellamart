<template>
  <div class="app-footer">
    <v-footer :app="true" absolute class="pa-0 d-block" color="#f4f4f4">
      <div class="d-flex py-10 px-8">
        <v-container class="pa-0 pa-md-4">
          <v-row>
            <v-col class="pa-1 pa-md-4" cols="12" sm="3">
              <h3>CATEGORIES</h3>
              <v-list-item v-for="category in categories" :key="category.title">
                <router-link
                  :to="{
                    name: 'products_category',
                    params: { category: category.route },
                    query: { title: category.title },
                  }"
                  style="color: black; text-decoration: none"
                  >{{ category.title }}
                </router-link>
              </v-list-item>
            </v-col>
            <v-col class="pa-1 pa-md-4" cols="12" sm="3">
              <h3>FURTHER INFO.</h3>
              <v-list-item>About us</v-list-item>
              <v-list-item>Gift Certificates</v-list-item>
              <v-list-item>Theme Styles</v-list-item>
              <v-list-item>Contact us</v-list-item>
              <v-list-item>Blog</v-list-item>
              <v-list-item>Brands</v-list-item>
              <v-list-item>Sitemap</v-list-item>
            </v-col>
            <v-col class="pa-1 pa-md-4" cols="12" sm="3">
              <h3>CUSTOMER SERVICE</h3>
              <v-list-item>Help & FAQs</v-list-item>
              <v-list-item>Terms of Conditions</v-list-item>
              <v-list-item>Privacy Policy</v-list-item>
              <v-list-item>Online Returns Policy</v-list-item>
              <v-list-item>Rewards Program</v-list-item>
              <v-list-item>Rebate Center</v-list-item>
              <v-list-item>Partners</v-list-item>
            </v-col>
            <v-col class="pa-1 pa-md-4" cols="12" sm="3">
              <img
                src="@/assets/images/logo-black.webp"
                alt="logo-footer"
                class="pb-6"
                style="width: 73%"
              />
              <div class="d-flex pa-2">
                <v-icon class="pr-4">mdi-map-marker</v-icon>
                <p>Damietta, Egypt</p>
              </div>
              <div class="d-flex pa-2">
                <v-icon class="pr-4">mdi-phone</v-icon>
                <p>+20 1117852122</p>
              </div>
              <div class="d-flex pa-2">
                <v-icon class="pr-4">mdi-email-outline</v-icon>
                <p style="word-break: break-all">yousefmaher.dev@gmail.com</p>
              </div>
              <div class="icons pt-4">
                <a href="https://wa.me/201117852122" target="_blank">
                  <v-icon class="pa-4" size="30">mdi-whatsapp</v-icon>
                </a>
                <a
                  href="https://www.linkedin.com/in/yousef-maher-81771b191"
                  target="_blank"
                >
                  <v-icon class="pa-4" size="30">mdi-linkedin</v-icon>
                </a>
                <a
                  href="https://youssef-maher.github.io/portfolio/"
                  target="_blank"
                >
                  <v-icon class="pa-4" size="30">mdi-link-variant</v-icon>
                </a>
                <a href="https://github.com/Youssef-Maher" target="_blank">
                  <v-icon class="pa-4" size="30">mdi-github</v-icon>
                </a>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="copyright">
        <p>
          Made by
          <a href="https://youssef-maher.github.io/portfolio/" target="_blank"
            >Yousef Maher</a
          >
          - {{ new Date().getFullYear() }}
        </p>
        <p>
          Course By Eng. Ahmed El Masry -
          <a href="https://www.youtube.com/@vuejs-wisdom" target="_blank"
            >Vuejs Wisdom</a
          >
        </p>
      </div>
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
<style lang="scss">
.icons {
  a {
    color: rgb(0, 0, 0);
  }
}
.copyright {
  text-align: center;
  padding: 15px 0;
  background-color: #d7d7d7;
  font-size: 14px;
  p {
    margin: 0;
    a {
      color: #010e88;
      text-decoration: none;
      font-weight: bold;
    }
  }
}

@media (max-width: 990px) {
  .app-footer {
    h3 {
      font-size: 16px;
    }
  }
}
</style>
