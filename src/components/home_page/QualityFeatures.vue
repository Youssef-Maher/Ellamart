<template>
  <div class="quality-features py-16">
    <v-container>
      <v-row justify="space-between">
        <v-col v-for="feature in features" :key="feature.title" class="pa-1">
          <v-card
            class="d-flex flex-column justify-center align-center px-2 py-16 bg-white h-100 text-center ma-1"
            elevation="0"
          >
            <v-icon
              class="pb-10"
              style="color: #7420d5; font-size: 70px"
              :icon="feature.icon"
            ></v-icon>
            <h2 style="font-size: 18px">{{ feature.title }}</h2>
            <v-card-text>{{ feature.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "QualityFeatures",
  data() {
    return {
      features: [
        {
          icon: "mdi-star-half-full",
          title: "Quality And Saving",
          description: "Comprehensive quality control and affordable prices",
        },
        {
          icon: "mdi-garage-variant",
          title: "Global Warehouse",
          description: "37 Overseas Warehouses",
        },
        {
          icon: "mdi-truck-fast-outline",
          title: "Fast Shipping",
          description: "Fast and convenient door to door deliver",
        },
        {
          icon: "mdi-shield-half-full",
          title: "Payment Security",
          description: "More than 10 different secure payment methods",
        },
        {
          icon: "mdi-help-circle",
          title: "Have Questions?",
          description: "24/7 Customer Service - We're here and happy to help!",
        },
      ],
    };
  },
};
</script>
<style>
.quality-features {
  background-color: #eee;
}
</style>
