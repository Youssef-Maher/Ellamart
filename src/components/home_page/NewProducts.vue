<template>
  <div class="new-products py-16 px-5">
    <v-container fluid>
      <div class="title mb-10 d-flex justify-space-between align-center">
        <h2>New Products</h2>
      </div>
      <v-row v-if="products.length === 0">
        <v-col>
          <v-row>
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader type="image, article"></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="7" class="pt-15">
          <swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :slides-per-view="2"
            :space-between="20"
            class="pb-9 px-5"
            :autoplay="{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }"
            :loop="true"
            :speed="1000"
          >
            <swiper-slide v-for="item in products" :key="item.id">
              <v-card elevation="0" class="pb-5">
                <v-hover v-slot="{ isHovering, props }">
                  <div style="position: relative" v-bind="props">
                    <img
                      :src="
                        shownItem[item.title]
                          ? shownItem[item.title]
                          : item.thumbnail
                      "
                      class="w-100"
                      style="height: 200px; object-fit: cover"
                      alt=""
                    />
                    <v-btn
                      :style="{ opacity: isHovering ? 1 : 0 }"
                      @click="openQuickView(item)"
                      class="quick-view"
                      >Quick View</v-btn
                    >
                  </div>
                </v-hover>
                <v-card-title class="card-title pl-0 pb-1"
                  >{{
                    item.title.split(" ").length <= 4
                      ? item.title
                      : item.title.split(" ").slice(0, 4).join(" ") + " ..."
                  }}
                </v-card-title>
                <v-card-text class="description pl-0 pb-1">
                  {{
                    item.description.split(" ").length <= 10
                      ? item.description
                      : item.description.split(" ").slice(0, 12).join(" ") +
                        " ..."
                  }}
                </v-card-text>
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
                  <span
                    class="text-red font-weight-bold"
                    style="font-size: 16px"
                    >${{ item.price }}
                  </span>
                </v-card-text>
                <v-btn-toggle
                  v-model="shownItem[item.title]"
                  style="width: 100%"
                  mandatory
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
        <v-col cols="5 " style="align-self: center">
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
  inject: ["Emitter"],
  props: {
    products: {
      type: Array,
    },
  },
  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
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
<style lang="scss">
.new-products {
  .title {
    font-size: 18px;
    font-weight: 900;
    color: black;
  }
  a {
    color: black;
    font-size: 16px;
    font-weight: normal;
  }
  .quick-view {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    border: 1px solid black;
    border-radius: 30px;
    width: fit-content;
  }
  .card-title {
    font-weight: 600;
    font-size: 17px;
  }
  .description {
    padding: 0;
  }
}
</style>
