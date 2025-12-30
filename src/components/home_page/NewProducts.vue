<template>
  <div class="new-products pt-12">
    <v-container fluid>
      <div class="title"><h2>New Products</h2></div>
      <v-row>
        <v-col cols="7" class="pt-15">
          <swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
            class="pb-9 px-5"
            :autoplay="{ delay: 3000 }"
            :speed="1000"
          >
            <swiper-slide v-for="item in products" :key="item.id">
              <v-card elevation="0" class="pb-5">
                <img
                  :src="
                    shownItem[item.title]
                      ? shownItem[item.title]
                      : item.thumbnail
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
                      : item.description.split(" ").slice(0, 4).join(" ")
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
                  <span
                    class="text-red font-weight-bold"
                    style="font-size: 16px"
                    >${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      )
                    }}</span
                  >
                </v-card-text>
                <v-btn-toggle
                  v-model="shownItem[item.title]"
                  style="width: 100%"
                >
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
                    class="my-3 py-1 px-5"
                    variant="outlined"
                    density="compact"
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
            </swiper-slide>
            <div class="swiper-pagination"></div>
          </swiper>
        </v-col>
        <v-col cols="5">
          <img src="@/assets/images/new-products.webp" alt="" class="w-100" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper";
export default {
  props: {
    products: {
      type: Array,
    },
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    shownItem: {},
  }),
};
</script>
