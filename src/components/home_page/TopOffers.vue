<template>
  <div class="top-offers">
    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <div class="item">
            <img
              src="../../assets/images/playstations.webp"
              alt="playstations"
            />
          </div>
        </v-col>
        <v-col cols="4">
          <div class="item">
            <img src="../../assets/images/headset.webp" alt="headset" />
          </div>
        </v-col>
        <v-col cols="4">
          <div class="item">
            <img src="../../assets/images/chairs.webp" alt="chairs" />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <div class="item">
            <img src="../../assets/images/iphones.webp" alt="iphones" />
          </div>
        </v-col>
        <v-col cols="6">
          <div class="item">
            <img src="../../assets/images/laptops.webp" alt="laptops" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.top-offers {
  background-color: #eee;
  padding: 20px;
  .item {
    padding: 10px;
    img {
      width: 100%;
    }
  }
}
</style>
