<template>
  <div class="menu-drawer">
    <v-navigation-drawer
      v-model="drawer"
      location="left"
      temporary
      :width="300"
      class="position-fixed pa-4"
    >
      <v-container>
        <div class="d-flex justify-space-between">
          <h3>Categories</h3>
          <v-icon @click="drawer = false" class="align-self-center"
            >mdi-close-box-outline
          </v-icon>
        </div>
        <v-list class="my-4">
          <v-list-item
            :to="{
              name: 'products_category',
              params: { category: category.route },
              query: { title: category.title },
            }"
            class="py-3"
            v-for="category in categories"
            :key="category.title"
            color="primary"
          >
            {{ category.title }}
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapState } from "pinia";
import { productsModule } from "@/stores/products";
export default {
  inject: ["Emitter"],
  data() {
    return {
      drawer: false,
    };
  },
  mounted() {
    this.Emitter.on("openMenu", () => {
      this.drawer = true;
    });
  },
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
};
</script>
