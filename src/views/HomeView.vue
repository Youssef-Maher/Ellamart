<template>
  <UpperBanner />
  <TheFeatures />
  <TopOffers />
  <ProductsSwiper :products="flashDeals" />
</template>

<script>
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import ProductsSwiper from "@/components/home_page/ProductsSwiper.vue";
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsSwiper,
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
