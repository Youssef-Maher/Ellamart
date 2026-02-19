<template>
  <div class="products-swiper py-16 px-10">
    <div class="title mb-10 d-flex justify-space-between align-center">
      <h2 :class="`text-${titleColor}`">{{ title }}</h2>
      <a href="#">Shop All</a>
    </div>
    <v-container fluid v-if="products.length === 0">
      <v-row>
        <v-col>
          <v-row>
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader type="image, article"></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      class="pb-10 px-8"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
      :autoplay="{ delay: 3000 }"
      :speed="1000"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <v-card elevation="0" class="pb-5">
          <img
            :src="
              shownItem[item.title] ? shownItem[item.title] : item.thumbnail
            "
            class="w-100"
            style="height: 230px; object-fit: cover"
            alt=""
          />
          <v-card-text class="card-title pl-0 pb-1"
            >{{
              item.title.split(" ").length <= 3
                ? item.title
                : item.title.split(" ").slice(0, 3).join(" ") + " ..."
            }}
          </v-card-text>
          <v-card-text class="description pl-0 pb-1">
            {{
              item.description.split(" ").length <= 10
                ? item.description
                : item.description.split(" ").slice(0, 9).join(" ") + " ..."
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
            <del class="pr-2">${{ item.price }}</del>
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
              density="compact"
              style="text-transform: none; border-radius: 30px"
              class="my-3 py-2 px-12"
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
      </swiper-slide>
      <div class="swiper-prev"></div>
      <div class="swiper-next"></div>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper";
export default {
  props: {
    products: {
      type: Array,
    },
    title: {
      type: String,
    },
    titleColor: {
      type: String,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
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
.products-swiper {
  .title {
    font-size: 18px;
    font-weight: 900;
    a {
      color: black;
      font-size: 16px;
      font-weight: normal;
    }
  }
  .card-title {
    font-weight: 600;
  }
  .description {
    padding: 0;
  }
}
.products-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    border: 2px solid rgb(95, 95, 95);
    border-radius: 50%;
    background-color: white;
    top: 35%;
  }
}
.products-swiper {
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(53, 53, 53);
    font-weight: 900;
  }
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
}
</style>
