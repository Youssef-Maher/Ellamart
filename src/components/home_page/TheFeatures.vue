<template>
  <div class="features">
    <v-container>
      <v-row class="py-3">
        <v-col>
          <div class="item">
            <v-icon class="icon mr-3">mdi-truck-fast</v-icon>
            <span>Free Shipping & Returns </span>
          </div>
        </v-col>
        <v-col>
          <div class="item second">
            <v-icon class="icon mr-3">mdi-trophy-outline</v-icon>
            <span>Lowest Price Guarantee </span>
          </div>
        </v-col>
        <v-col>
          <div class="item">
            <v-icon class="icon mr-3">mdi-seal</v-icon>
            <span>Longest Warranties Offers </span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.features {
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 17px;
    color: #212529;
    padding: 10px 0;
  }
  .second {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      background: rgb(119, 119, 119);
      left: 0;
      width: 1px;
      height: 100%;
    }
    &::after {
      content: "";
      position: absolute;
      background: rgb(119, 119, 119);
      right: 0;
      width: 1px;
      height: 100%;
    }
    .item {
      font-size: 35px;
    }
  }
}
</style>
