<template>
  <div class="product-details pa-5">
    <v-container fluid style="min-height: 60vh">
      <v-lazy>
        <v-row class="justify-center">
          <v-col cols="12" sm="6" md="5" class="text-center">
            <v-skeleton-loader
              v-if="loading"
              type="image, image"
            ></v-skeleton-loader>
            <img
              v-if="!loading"
              :src="
                tab[singleProduct.id]
                  ? tab[singleProduct.id]
                  : singleProduct.thumbnail
              "
              class="thumbnail"
            />
            <v-tabs
              center-active
              v-if="!loading"
              height="150"
              v-model="tab[singleProduct.id]"
            >
              <v-tab
                v-for="(img, index) in singleProduct.images"
                :key="index"
                :value="img"
              >
                <img :src="img" />
              </v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="12" sm="6" md="5">
            <v-skeleton-loader
              v-if="loading"
              type="article, article"
            ></v-skeleton-loader>
            <v-card elevation="0" v-if="!loading">
              <v-card-title class="card-title pb-2 px-0">{{
                singleProduct.title
              }}</v-card-title>
              <div class="d-flex align-center mb-2">
                <v-rating
                  class="mr-3"
                  color="#fcca41"
                  size="x-small"
                  half-increments
                  readonly
                  v-model="singleProduct.rating"
                ></v-rating>
                <span>Stock: {{ singleProduct.stock }}</span>
              </div>
              <v-card-text class="description py-2 px-0">
                {{ singleProduct.description }}
              </v-card-text>
              <v-card-text class="info"
                >Brand: <span>{{ singleProduct.brand }}</span>
              </v-card-text>
              <v-card-text class="info"
                >Available: <span>{{ singleProduct.stock }}</span></v-card-text
              >
              <v-card-text class="info"
                >SKU: <span>{{ singleProduct.sku }}</span></v-card-text
              >
              <v-card-text class="info"
                >Price:
                <span class="text-red" style="font-size: 18px"
                  >${{ singleProduct.price }}</span
                >
              </v-card-text>
              <div class="d-flex space-between py-2">
                <span class="info mr-3">Quantity:</span>
                <div class="counter">
                  <v-icon @click="quantity > 1 ? quantity-- : (quantity = 1)"
                    >mdi-minus</v-icon
                  >
                  <input type="number" v-model="quantity" />
                  <v-icon @click="quantity++">mdi-plus</v-icon>
                </div>
              </div>
              <v-card-text class="info pt-5"
                >Subtotal:
                <span class="text-red" style="font-size: 18px"
                  >${{ (singleProduct.price * quantity).toFixed(2) }}</span
                >
              </v-card-text>
              <v-card-actions class="pa-0 mt-5">
                <v-btn
                  :loading="loadState"
                  class="add-btn"
                  style="background-color: rgb(37, 37, 37); color: white"
                  @click="addToCart(singleProduct)"
                  >Add to Card</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-lazy>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import { cartStore } from "@/stores/cart";
export default {
  inject: ["Emitter"],
  data() {
    return {
      quantity: 1,
      tab: {},
      loading: false,
      loadState: false,
    };
  },
  computed: {
    ...mapState(productsModule, ["singleProduct"]),
  },
  methods: {
    ...mapActions(productsModule, ["getSingleProduct"]),
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.addItem(item);
      this.loadState = true;
      setTimeout(() => {
        this.Emitter.emit("openCart");
        this.loadState = false;
      }, 500);
    },
  },
  async mounted() {
    this.loading = true;
    await this.getSingleProduct(this.$route.params.productId);
    this.loading = false;
  },
};
</script>
<style lang="scss">
.product-details {
  .thumbnail {
    height: 350px;
    width: 100%;
    object-fit: contain;
  }
  .v-tab {
    img {
      width: 100px;
      height: 100px;
    }
  }
  .card-title {
    font-size: 22px;
    font-weight: 600;
  }
  .v-rating__wrapper {
    width: 18px;
  }
  .description {
    font-size: 14px;
    color: grey;
  }
  .info {
    padding: 5px 0;
    span {
      color: black;
      font-weight: 600;
    }
  }
  .counter {
    border: 1px solid rgba(117, 117, 117, 0.5);
    width: fit-content;
    border-radius: 30px;
    padding: 5px;
    input {
      outline: none;
      border: none;
      text-align: center;
      width: 40px;
    }
  }
  .add-btn {
    background-color: rgb(37, 37, 37);
    color: white;
    border-radius: 30px;
    text-transform: none;
    font-size: 16px;
    padding: 15px 45px;
    height: 45px;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
@media (max-width: 580px) {
  .product-details {
    .thumbnail {
      height: 230px;
    }
    .v-tab {
      img {
        width: 70px;
        height: 70px;
      }
    }
  }
}
</style>
