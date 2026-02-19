<template>
  <div class="shop-withus py-14 px-4">
    <div class="title">
      <h2 class="pb-10"><span>Why Shop</span> with us</h2>
    </div>
    <div class="items">
      <v-row>
        <v-col cols="3" v-for="item in items" :key="item.title">
          <img :src="item.image" alt="" />
          <h3>{{ item.title }}</h3>
          <v-card-text style="padding: 7px"
            >Present suscipit mattis facilisis.</v-card-text
          >
          <a href="#" style="color: white">Learn More</a>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: require("@/assets/images/Free-Shipping.png"),
          title: "Free Shipping on First order",
        },
        {
          image: require("@/assets/images/Weekly-Flase-Sale.png"),
          title: "Weekly Flase Sale",
        },
        {
          image: require("@/assets/images/Anual-Payment-Discount.png"),
          title: "Anual Payment Discount",
        },
        {
          image: require("@/assets/images/Cashback-Reward.png"),
          title: "Cashback Reward Program",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.shop-withus {
  background-image: url("@/assets/images/why-shop-with-us-banner.webp");
  color: white;
  text-align: center;
  .title {
    h2 {
      font-size: 40px;
      font-weight: 600;
      span {
        color: #10ffda;
      }
    }
  }
  .items {
    h3 {
      font-weight: 500;
      font-size: 20px;
    }
  }
}
</style>
