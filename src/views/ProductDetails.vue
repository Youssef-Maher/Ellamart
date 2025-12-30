<template>
  <div class="product-details">
    <v-container fluid>
      <v-row>
        <v-col cols="7">
          <img :src="singleProduct.thumbnail" alt="" class="w-100" />
          <v-tabs height="220">
            <v-tab v-for="(pic, index) in singleProduct.images" :key="index">
              <img
                :src="pic"
                alt=""
                width="100"
                height="100"
                style="over-flow: hidden; object-fit: cover"
              />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="5">
          <v-card elevation="0">
            <v-card-title>{{ singleProduct.title }}</v-card-title>
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
            <v-card-subtitle>Brand: {{ singleProduct.brand }}</v-card-subtitle>
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
            <v-number-input
              :min="1"
              v-model="quantity"
              :reverse="false"
              controlVariant="split"
              :hideInput="false"
              :inset="false"
            ></v-number-input>
            <v-card-text>Subtotal:</v-card-text>
            <v-card-actions>
              <v-btn style="background-color: rgb(37, 37, 37); color: white"
                >add to card</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
export default {
  name: "ProductDetails",
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    ...mapState(productsModule, ["singleProduct"]),
  },
  methods: {
    ...mapActions(productsModule, ["getSingleProduct"]),
  },
  async mounted() {
    await this.getSingleProduct(this.$route.params.productId);
  },
};
</script>
