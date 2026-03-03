<template>
  <v-dialog persistent v-model="success" max-width="50vw" max-height="80vh">
    <div class="pa-5" style="background: white">
      <v-container>
        <v-row>
          <v-col>
            <div
              class="d-flex flex-column align-center justify-center text-center"
            >
              <v-icon class="pa-5 mb-5" color="success" size="100"
                >mdi-check-circle-outline</v-icon
              >
              <h2>Order Placed Successfuly!</h2>
              <p class="my-5" style="color: #7d7d7d">
                Thank you for shopping with us. We’ve received your order and
                are getting it ready for shipment. You will receive a
                confirmation email shortly.
              </p>
              <v-btn
                color="primary"
                to="/"
                @click="
                  clearCart();
                  success = false;
                "
                >Done!</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-dialog>
</template>

<script>
import { mapActions } from "pinia";
import { cartStore } from "@/stores/cart";
export default {
  inject: ["Emitter"],
  data() {
    return {
      success: false,
    };
  },
  methods: {
    ...mapActions(cartStore, ["clearCart"]),
  },
  async mounted() {
    this.Emitter.on("openSuccess", () => {
      this.success = true;
    });
  },
};
</script>
