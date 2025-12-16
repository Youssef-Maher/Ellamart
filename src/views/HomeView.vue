<template>
  <UpperBanner />
  <TheFeatures />
  <TopOffers />
  <ProductsSwiper :products="flashDeals" />
  <TopCategories />
  <NewProducts :products="flashDeals" />
  <QualityFeatures />
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
  },
  computed: {
    ...mapState(productsModule, ["flashDeals"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>
