<template>
  <div class="cart-drawer">
    <v-navigation-drawer v-model="drower" location="right" temporary>
      <h1>joeeeeeeee</h1>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],
  data() {
    return {
      drower: false,
    };
  },

  mounted() {
    this.Emitter.on("openCart", () => {
      this.drower = true;
    });
  },
};
</script>
