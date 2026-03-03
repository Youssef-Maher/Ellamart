<template v-if="categoryProducts.products">
  <div class="products-category py-16 px-10" style="min-height: 80vh">
    <div class="mb-10">
      <h2>{{ $route.params.title }}</h2>

      <v-container>
        <v-card :loading="loading" elevation="0" class="pt-5">
          <v-row v-if="loading">
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader type="image, article"></v-skeleton-loader>
            </v-col>
          </v-row>
          <v-row v-if="!loading">
            <v-col
              cols="3"
              v-for="item in categoryProducts.products"
              :key="item.id"
            >
              <v-lazy>
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
                        style="height: 230px; object-fit: cover"
                        alt=""
                      />
                      <v-btn
                        :style="{ opacity: isHovering ? 1 : 0 }"
                        @click="openQuickView(item)"
                        class="quick-view"
                        >Quick View
                      </v-btn>
                    </div>
                  </v-hover>

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
                        : item.description.split(" ").slice(0, 9).join(" ") +
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
                      >${{ item.price }}</span
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
              </v-lazy>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </div>
  </div>
</template>
<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
export default {
  inject: ["Emitter"],
  props: {
    products: {
      type: Array,
    },
  },

  data: () => ({
    shownItem: {},
    loading: false,
  }),
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  watch: {
    async $route() {
      document.documentElement.scrollTop = 0;
      this.loading = true;
      await this.getProductsByCategory(this.$route.params.category);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.getProductsByCategory(this.$route.params.category);
    this.loading = false;
  },
};
</script>
<style lang="scss">
.products-category {
  .title {
    font-size: 18px;
    font-weight: 900;
    color: rgb(216, 3, 3);
    a {
      color: black;
      font-size: 16px;
      font-weight: normal;
    }
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
  }
  .description {
    padding: 0;
  }
}
</style>
