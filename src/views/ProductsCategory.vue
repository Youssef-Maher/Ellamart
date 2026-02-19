<template v-if="categoryProducts.products">
  <div class="products-swiper py-16 px-10">
    <div class="title mb-10 d-flex justify-space-between align-center">
      <h2>{{ $route.params.title }}</h2>
      <a href="#">Shop All</a>
    </div>

    <div class="d-flex" style="gap: 20px">
      <v-col cols="3" v-for="item in categoryProducts.products" :key="item.id">
        <v-card elevation="0" class="pb-5">
          <img
            :src="
              shownItem[item.title] ? shownItem[item.title] : item.thumbnail
            "
            class="w-100"
            style="height: 230px; object-fit: cover"
            alt=""
          />
          <v-card-text class="pl-0 pb-1"
            >{{ item.title }}
            {{
              item.description.split(" ").lenght <= 10
                ? item.description
                : item.description.split(" ").slice(0, 12).join(" ") + " ..."
            }}</v-card-text
          >
          <v-rating
            v-model="item.rating"
            half-increments
            readonly
            color="#fcca41"
            size="x-small"
            density="comfortable"
          >
          </v-rating>
          <v-card-text class="pl-0 pt-0">
            <del>${{ item.price }}</del> From
            <span class="text-red font-weight-bold" style="font-size: 16px"
              >${{
                Math.ceil(
                  item.price - item.price * (item.discountPercentage / 100)
                )
              }}</span
            >
          </v-card-text>
          <v-btn-toggle v-model="shownItem[item.title]" style="width: 100%">
            <v-btn
              v-for="(pic, i) in item.images"
              :value="pic"
              :key="i"
              size="x-small"
              rounded="xl"
              :ripple="false"
              ><img
                :src="pic"
                alt=""
                width="35"
                height="35"
                style="border-radius: 50%; object-fit: cover"
            /></v-btn>
          </v-btn-toggle>
          <div>
            <v-btn
              style="text-transform: none; border-radius: 30px"
              class="my-3"
              variant="outlined"
              @click="
                $router.push({
                  name: 'product_details',
                  params: { productId: item.id },
                })
              "
              >Choose Options</v-btn
            >
          </div>
        </v-card>
      </v-col>
    </div>
  </div>
</template>
<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
export default {
  props: {
    products: {
      type: Array,
    },
  },

  data: () => ({
    shownItem: {},
  }),
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  watch: {
    $route() {
      this.getProductsByCategory(this.$route.params.category);
    },
  },
  async mounted() {
    await this.getProductsByCategory(this.$route.params.category);
  },
};
</script>
<style>
.products-swiper .title {
  font-size: 18px;
  font-weight: 900;
  color: rgb(216, 3, 3);
}
.products-swiper .title a {
  color: black;
  font-size: 16px;
  font-weight: normal;
}
.products-swiper .swiper-button-next,
.products-swiper .swiper-button-prev {
  width: 35px;
  height: 35px;
  border: 2px solid rgb(95, 95, 95);
  border-radius: 50%;
  background-color: white;
  top: 35%;
}
.products-swiper .swiper-button-next::after,
.products-swiper .swiper-button-prev::after {
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(53, 53, 53);
  font-weight: 900;
}
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
}
</style>
