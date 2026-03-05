<template>
  <v-dialog id="quick-dialog" v-model="dialog">
    <div class="quick-view">
      <v-container>
        <v-icon @click="dialog = false" class="close-btn"
          >mdi-close-box-outline</v-icon
        >
        <v-lazy>
          <v-row class="justify-center">
            <v-col cols="12" sm="6" class="text-center">
              <v-skeleton-loader
                v-if="loading"
                type="image, image"
              ></v-skeleton-loader>
              <img
                class="thumbnail"
                v-if="!loading"
                :src="tab[product.id] ? tab[product.id] : product.thumbnail"
              />
              <v-tabs
                center-active
                v-if="!loading"
                height="fit-content"
                v-model="tab[product.id]"
              >
                <v-tab
                  v-for="(img, index) in product.images"
                  :key="index"
                  :value="img"
                >
                  <img :src="img" />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="12" sm="6">
              <v-skeleton-loader
                v-if="loading"
                type="article, article"
              ></v-skeleton-loader>
              <v-card elevation="0" v-if="!loading">
                <v-card-title class="card-title pa-0">{{
                  product.title
                }}</v-card-title>
                <div class="d-flex align-center ma-0">
                  <v-rating
                    class="mr-3"
                    color="#fcca41"
                    size="x-small"
                    half-increments
                    readonly
                    v-model="product.rating"
                  ></v-rating>
                  <span>Stock: {{ product.stock }}</span>
                </div>

                <v-card-text class="description py-2 px-0">
                  {{ product.description }}
                </v-card-text>
                <v-card-text class="info"
                  >Brand: <span>{{ product.brand }}</span>
                </v-card-text>
                <v-card-text class="info"
                  >Available: <span>{{ product.stock }}</span></v-card-text
                >
                <v-card-text class="info"
                  >SKU: <span>{{ product.sku }}</span></v-card-text
                >
                <v-card-text class="info"
                  >Price:
                  <span class="text-red" style="font-size: 18px"
                    >${{ product.price }}</span
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
                  <span style="font-size: 18px"
                    >${{ (product.price * quantity).toFixed(2) }}</span
                  >
                </v-card-text>
                <v-card-actions class="pa-0 mt-5">
                  <v-btn
                    class="add-btn"
                    :loading="loadState"
                    @click="
                      addToCart(product);
                      openCart();
                    "
                    >Add to Card</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-lazy>
      </v-container>
    </div>
  </v-dialog>
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
      dialog: false,
      product: {},
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
    },
    openCart() {
      this.loadState = true;
      setTimeout(() => {
        this.Emitter.emit("openCart");
        this.loadState = false;
        this.dialog = false;
      }, 500);
    },
  },
  async mounted() {
    this.Emitter.on("openQuickView", (product) => {
      this.dialog = true;
      this.product = product;
    });
  },
};
</script>
<style lang="scss">
#quick-dialog {
  max-width: 70vw;
  max-height: 85vh;
}
.quick-view {
  background-color: white;
  border-radius: 10px;
  overflow-y: auto;
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
      width: 50px;
    }
  }
  .add-btn {
    background-color: rgb(37, 37, 37);
    color: white;
    border-radius: 30px;
    text-transform: none;
    font-size: 14px;
    padding: 15px 45px;
    height: 50px !important;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@media (max-width: 580px) {
  #quick-dialog {
    max-width: 100vw;
  }
  .quick-view {
    .thumbnail {
      height: 135px;
      width: 70%;
    }
    .v-tab {
      img {
        width: 70px;
        height: 70px;
      }
    }
  }
}
@media (max-width: 990px) {
  #quick-dialog {
    max-width: 90vw;
    max-height: 95vh;
  }
}
</style>
