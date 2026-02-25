<template>
  <div class="product-details mt-10">
    <v-container fluid style="min-height: 80vh">
      <v-lazy>
        <v-row class="justify-center">
          <v-col cols="5">
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
              class="w-100"
              style="height: 350px; object-fit: cover"
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
                <img
                  :src="img"
                  alt=""
                  width="100"
                  height="100"
                  style="overflow: hidden; object-fit: cover"
                />
              </v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="5">
            <v-skeleton-loader
              v-if="loading"
              type="article, article"
            ></v-skeleton-loader>
            <v-card elevation="0" v-if="!loading">
              <v-card-title class="card-title">{{
                singleProduct.title
              }}</v-card-title>
              <v-card-subtitle>
                Category: {{ singleProduct.category }}
              </v-card-subtitle>
              <div class="rating">
                <v-rating
                  color="#fcca41"
                  size="x-small"
                  half-increments
                  readonly
                  v-model="singleProduct.rating"
                ></v-rating>
                <span>stock:{{ singleProduct.stock }}</span>
              </div>

              <v-card-text>
                {{ singleProduct.description }}
              </v-card-text>
              <v-card-subtitle
                >Brand: {{ singleProduct.brand }}</v-card-subtitle
              >
              <v-card-subtitle
                >Available: {{ singleProduct.stock }}</v-card-subtitle
              >
              <v-card-text
                ><del
                  >$<span>{{ singleProduct.price * quantity }}</span></del
                >
                From $<span>{{
                  Math.ceil(
                    singleProduct.price -
                      singleProduct.price *
                        (singleProduct.discountPercentage / 100)
                  ) * quantity
                }}</span>
              </v-card-text>
              <div class="counter">
                <v-icon @click="quantity > 1 ? quantity-- : (quantity = 1)"
                  >mdi-minus</v-icon
                >
                <input type="number" v-model="quantity" />
                <v-icon @click="quantity++">mdi-plus</v-icon>
              </div>
              <v-card-text
                >Subtotal:
                {{
                  Math.ceil(
                    singleProduct.price -
                      singleProduct.price *
                        (singleProduct.discountPercentage / 100)
                  ) * quantity
                }}</v-card-text
              >
              <v-card-actions>
                <v-btn
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
  name: "ProductDetails",
  data() {
    return {
      quantity: 1,
      tab: {},
      loading: false,
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
  .card-title {
    font-size: 23px;
    line-height: 1.5;
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
      width: 100px;
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
</style>
