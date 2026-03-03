<template>
  <div class="cart-page pa-10">
    <v-container>
      <h5>
        Home <span><v-icon>mdi-chevron-right</v-icon></span> Shopping Cart
      </h5>
      <div
        v-if="cartItems.length === 0"
        class="d-flex justify-center"
        style="min-height: 30vh"
      >
        <div class="d-flex flex-column align-center align-self-center">
          <p class="my-4">Your cart is currently empty.</p>
          <v-btn to="/" class="continue-btn"> Continue Shopping </v-btn>
        </div>
      </div>
      <div v-if="cartItems.length > 0">
        <div class="position-relative my-5">
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
          <p v-if="totalPrice <= 10000" class="mt-3">
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
          <p v-else class="mt-3">Your order now is included Free Shipping</p>
        </div>

        <v-row>
          <v-col cols="9">
            <v-table>
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in cartItems" :key="product.id">
                  <td class="d-flex pa-4" style="height: 120px">
                    <img :src="product.thumbnail" />
                    <div>
                      <h3>{{ product.title }}</h3>
                      <p>Category: {{ product.category }}</p>
                    </div>
                  </td>
                  <td>${{ product.price }}</td>
                  <td style="width: 130px">
                    <div class="counter">
                      <v-icon
                        style="font-size: 20px"
                        @click="
                          product.quantity > 1
                            ? product.quantity--
                            : (product.quantity = 1);
                          setItemQuantity();
                        "
                        >mdi-minus</v-icon
                      >
                      <input
                        @input="setItemQuantity()"
                        class="pa-0"
                        type="number"
                        v-model="product.quantity"
                        min="1"
                      />
                      <v-icon
                        @click="
                          product.quantity++;
                          setItemQuantity();
                        "
                        style="font-size: 20px"
                        >mdi-plus</v-icon
                      >
                    </div>
                  </td>
                  <td>${{ (product.price * product.quantity).toFixed(2) }}</td>
                  <td>
                    <v-icon class="close-icon" @click="deleteItem(product.id)"
                      >mdi-close</v-icon
                    >
                  </td>
                </tr>
              </tbody>
            </v-table>
            <div class="my-10 py-4" style="border-top: 1px solid">
              <h3>Additional Comments</h3>
              <textarea
                placeholder="Special instruction for  seller"
              ></textarea>
              <h4 class="pt-4">Secure shopping guarantee</h4>
              <img
                src="@/assets/images/cart-page-cards.webp"
                class="mt-4"
                style="width: 40%"
              />
            </div>
          </v-col>
          <v-col cols="3">
            <h5 class="py-4" style="border-bottom: 1px solid">ORDER SUMMARY</h5>
            <div class="total-price d-flex justify-space-between pt-7 pb-2">
              <span>Subtotal:</span>
              <span>${{ totalPrice.toFixed(2) }}</span>
            </div>
            <div v-if="totalPrice >= 10000" class="text-green pt-4">
              <p style="font-weight: 600">
                Shipping is now free for your order!
              </p>
            </div>
            <div class="py-5">
              <div v-if="totalPrice < 10000">
                <h5 class="py-2">Get Shipping Estimate</h5>
                <select name="shipping" id="shipping" v-model="shipping">
                  <option value="50">Egypt - $50</option>
                  <option value="60">Saudi Arabia - $60</option>
                  <option value="60">Qatar - $60</option>
                  <option value="70">Bahrain - $70</option>
                  <option value="80">Oman - $80</option>
                  <option value="80">Yemen - $80</option>
                </select>
              </div>
              <h5 class="py-2 mt-3">Coupon Code:</h5>
              <input type="text" placeholder="Enter Coupon Code" />
              <div class="total-price d-flex justify-space-between my-10 pb-3">
                <span>Total:</span>
                <span class="text-red"
                  >${{
                    (
                      totalPrice +
                      (totalPrice >= 10000 ? 0 : parseInt(this.shipping))
                    ).toFixed(2)
                  }}</span
                >
              </div>
              <v-btn
                class="checkout-btn w-100"
                to="/checkout"
                @click="shippingCost()"
                >Proceed to Checkout</v-btn
              >
              <v-btn class="Shopping-btn w-100" to="/">Continue Shopping</v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { cartStore } from "@/stores/cart";

export default {
  name: "CartPage",
  data() {
    return {
      shipping: 50,
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
    ...mapActions(cartStore, ["deleteItem", "setItemQuantity"]),
    shippingCost() {
      if (this.totalPrice >= 10000) {
        localStorage.setItem("shippingPrice", 0);
      } else {
        localStorage.setItem("shippingPrice", this.shipping);
      }
      this.setItemQuantity();
    },
  },
};
</script>
<style lang="scss" scoped>
.cart-page {
  .progress-icon {
    position: absolute;
    left: v-bind("percentProgress + '%'");
    transform: translate(-100%, -82%);
    transition: 0.3s;
  }
  .continue-btn {
    border-radius: 30px;
    margin: auto;
    height: 45px;
    border: 1px solid;
  }
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
input,
select {
  width: 100%;
  border: 1px solid rgb(199, 199, 199);
  padding: 10px;
  outline: none;
}
textarea {
  margin-top: 10px;
  width: 50%;
  border: 1px solid rgb(151, 151, 151);
  padding: 15px;
  border-radius: 10px;
}
.total-price {
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid #b3b3b3;
}
.checkout-btn,
.Shopping-btn {
  background-color: #008af8;
  color: white;
  border-radius: 30px;
  padding: 10px 15px;
  margin-top: 20px;
}
.Shopping-btn {
  color: black;
  background-color: #ffffff;
  border: 1px solid black;
}
</style>
