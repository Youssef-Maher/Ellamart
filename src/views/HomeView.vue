<template>
  <UpperBanner />
  <TheFeatures />
  <TopOffers />
</template>

<script>
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import UpperBanner from "@/components/home_page/UpperBanner.vue";

export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
  },
};
</script>
