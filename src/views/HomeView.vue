<template>
  <UpperBanner />
  <TheFeatures />
  <TopOffers />
  <ProductsSwiper
    :products="flashDeals"
    title="Flash Deals"
    title-color="red"
  />
  <TopCategories />
  <NewProducts :products="newProducts" />
  <QualityFeatures />
  <ProductsSwiper :products="mobilePhones" title="Mobile Phones" />
  <v-container>
    <v-row>
      <v-col cols="6">
        <img
          src="@/assets/images/pretium.webp"
          alt="pretium"
          style="width: 100%"
        />
      </v-col>
      <v-col cols="6">
        <img
          src="@/assets/images/ligular.webp"
          alt="ligular"
          style="width: 100%"
        />
      </v-col>
    </v-row>
  </v-container>
  <ProductsSwiper :products="laptops" title="Laptops" />
  <img src="@/assets/images/xled-tv.webp" alt="xled-tv" style="width: 100%" />
  <ProductsSwiper :products="mensWatches" title="Men's Watches" />
  <WhyShopWithUs />
</template>

<script>
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import ProductsSwiper from "@/components/home_page/ProductsSwiper.vue";
import TopCategories from "@/components/home_page/TopCategories.vue";
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import QualityFeatures from "@/components/home_page/QualityFeatures.vue";
import NewProducts from "@/components/home_page/NewProducts.vue";
import WhyShopWithUs from "@/components/home_page/WhyShopWithUs.vue";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsSwiper,
    TopCategories,
    NewProducts,
    QualityFeatures,
    WhyShopWithUs,
  },
  computed: {
    ...mapState(productsModule, [
      "flashDeals",
      "newProducts",
      "mobilePhones",
      "laptops",
      "mensWatches",
    ]),
  },
  methods: {
    ...mapActions(productsModule, [
      "getProducts",
      "getMobilePhones",
      "getLaptops",
      "getMensWatches",
    ]),
  },
  mounted() {
    this.getProducts();
    this.getMobilePhones();
    this.getLaptops();
    this.getMensWatches();
  },
};
</script>
