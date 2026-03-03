<template>
  <div class="cart-drawer">
    <v-navigation-drawer
      v-model="drower"
      location="right"
      temporary
      :width="380"
      class="position-fixed"
    >
      <v-container>
        <div>
          <div class="d-flex justify-space-between">
            <h2>Shopping Cart</h2>
            <v-icon @click="drower = false" class="align-self-center"
              >mdi-close-box-outline</v-icon
            >
          </div>
          <p class="mb-3">
            {{ cartItems.length }} item{{ cartItems.length > 1 ? "s" : "" }}
          </p>
          <div class="position-relative my-5" v-if="cartItems.length > 0">
            <v-icon class="progress-icon" :color="progressColor"
              >mdi-truck-fast</v-icon
            >
            <v-progress-linear
              :color="progressColor"
              height="10"
              :model-value="percentProgress <= 100 ? percentProgress : 100"
              striped
              style="transition: 0.3s"
            ></v-progress-linear>
          </div>
          <p v-if="totalPrice <= 10000" class="pb-5">
            Only
            <span style="font-weight: bold"
              >${{
                (10000 - totalPrice).toFixed(2) <= 0
                  ? 0
                  : (10000 - totalPrice).toFixed(2)
              }}</span
            >
            Away from <span style="font-weight: bold">Free shipping!</span>
          </p>
          <p v-else class="pb-5">Your order now is included Free Shipping</p>
        </div>
        <div
          class="card overflow-auto pr-3"
          style="position: relative; max-height: 60vh"
        >
          <v-card
            elevation="0"
            class="card-item pa-4"
            v-for="item in cartItems"
            :key="item.id"
          >
            <v-icon class="close-icon" @click="deleteItem(item.id)"
              >mdi-close</v-icon
            >
            <div class="d-flex">
              <img
                :src="item.thumbnail"
                style="height: 70px; object-fit: contain"
              />
              <div>
                <v-card-title class="card-title pl-0 pb-1"
                  >{{
                    item.title.split(" ").length <= 3
                      ? item.title
                      : item.title.split(" ").slice(0, 3).join(" ") + " ..."
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
              </div>
            </div>
            <div class="d-flex justify-space-between align-center pt-4">
              <v-card-text class="price text-red">{{
                (item.price * item.quantity).toFixed(2)
              }}</v-card-text>
              <div class="counter">
                <v-icon
                  style="font-size: 20px"
                  @click="
                    item.quantity > 1 ? item.quantity-- : (item.quantity = 1);
                    setItemQuantity();
                  "
                  >mdi-minus</v-icon
                >
                <input
                  @input="setItemQuantity()"
                  type="number"
                  v-model.number="item.quantity"
                  min="1"
                />
                <v-icon
                  @click="
                    item.quantity++;
                    setItemQuantity();
                  "
                  style="font-size: 20px"
                  >mdi-plus</v-icon
                >
              </div>
            </div>
          </v-card>
        </div>
        <div
          v-if="cartItems.length > 0"
          class="total-price d-flex justify-space-between pa-4"
        >
          <span>Total:</span>
          <span>${{ totalPrice.toFixed(2) }}</span>
        </div>
        <div class="d-flex justify-space-between" v-if="cartItems.length > 0">
          <v-btn @click="drower = false" to="/checkout" class="checkout-btn"
            >Checkout</v-btn
          >
          <v-btn @click="drower = false" to="/cart-page" class="cart-btn"
            >View Cart</v-btn
          >
        </div>
        <div v-if="cartItems.length === 0" class="py-8">
          <div class="py-4" style="text-align: center">
            <p>Your cart is currently empty.</p>
          </div>
          <div class="d-flex justify-space-between">
            <v-btn @click="drower = false" class="continue-btn">
              Continue Shopping
            </v-btn>
          </div>
        </div>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { cartStore } from "@/stores/cart";

export default {
  inject: ["Emitter"],
  data() {
    return {
      drower: false,
    };
  },
  computed: {
    ...mapState(cartStore, ["cartItems"]),
    totalPrice() {
      let total = 0;
      this.cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    },
    percentProgress() {
      let percent = (this.totalPrice / 10000) * 100;
      return Math.min(percent, 100);
    },
    progressColor() {
      if (this.percentProgress >= 100) {
        return "green";
      } else if (this.percentProgress >= 50) {
        return "orange";
      } else {
        return "red";
      }
    },
  },
  methods: {
    ...mapActions(cartStore, ["getCartItems", "deleteItem", "setItemQuantity"]),
  },
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drower = true;
    });
    this.getCartItems();
  },
  components: {},
  watch: {},
};
</script>
<style lang="scss">
.cart-drawer {
  .progress-icon {
    position: absolute;
    left: v-bind("percentProgress + '%'");
    z-index: 9999;
    transform: translate(-100%, -82%);
    transition: 0.3s;
  }
  .card {
    border-bottom: 1px solid black;
    &::-webkit-scrollbar {
      width: 5px;
      &-track {
        background: #c9c8c8;
      }

      &-thumb {
        background: #1194ff;
      }
    }
  }
  .card-item {
    border-radius: 0;
    border-bottom: 1px solid #cfcfcf;
  }

  .close-icon {
    position: absolute;
    top: 10px;
    right: 7px;
  }
  .card-title {
    font-size: 15px;
    font-weight: 600;
    padding: 3px;
  }
  .description {
    font-size: 13px;
    padding: 3px;
  }
  .counter {
    border: 1px solid rgba(117, 117, 117, 0.5);
    width: fit-content;
    border-radius: 30px;
    padding: 2px 5px;
    input {
      outline: none;
      border: none;
      text-align: center;
      width: 40px;
      font-size: 15px;
    }
  }
  .price {
    font-size: 17px;
    font-weight: 600;
    padding: 5px;
  }
  .total-price {
    font-size: 18px;
    font-weight: 600;
  }
  .checkout-btn,
  .cart-btn {
    background-color: #008af8;
    color: white;
    border-radius: 30px;
    width: 48%;
    padding: 10px 15px;
  }
  .cart-btn,
  .continue-btn {
    color: black;
    background: white;
    border: 1px solid black;
  }
  .continue-btn {
    border-radius: 30px;
    margin: auto;
    height: 45px;
  }
}
</style>
