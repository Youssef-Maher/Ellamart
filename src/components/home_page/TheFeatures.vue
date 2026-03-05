<template>
  <div class="features">
    <v-container>
      <v-row>
        <v-col cols="4" class="pa-1">
          <div class="item d-flex flex-column flex-sm-row ga-1">
            <v-icon>mdi-truck-fast</v-icon>
            <span>Free Shipping & Returns </span>
          </div>
        </v-col>
        <v-col cols="4" class="pa-1">
          <div class="item second d-flex flex-column flex-sm-row ga-1">
            <v-icon>mdi-trophy-outline</v-icon>
            <span>Lowest Price Guarantee </span>
          </div>
        </v-col>
        <v-col cols="4" class="pa-1">
          <div class="item d-flex flex-column flex-sm-row ga-1">
            <v-icon>mdi-seal</v-icon>
            <span>Longest Warranties Offers </span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.features {
  background-color: #fec422;
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
@media (max-width: 990px) {
  .features {
    span {
      font-size: 13px;
      text-align: center;
    }
  }
}
@media (max-width: 580px) {
  .features {
    .item {
      padding: 2px 0;
      span {
        font-size: 11px;
      }
    }
  }
}
</style>
