<template>
  <div class="top-offers">
    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="item"
              v-bind="props"
              style="overflow: hidden; border-radius: 10px; height: 100%"
            >
              <img
                src="../../assets/images/playstations.webp"
                alt="playstations"
                :style="`width:100%; height: 100%; transition: .3s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="item"
              v-bind="props"
              style="overflow: hidden; border-radius: 10px; height: 100%"
            >
              <img
                src="../../assets/images/headset.webp"
                alt="headset"
                :style="`width:100%; height: 100%; transition: .3s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="item"
              v-bind="props"
              style="overflow: hidden; border-radius: 10px; height: 100%"
            >
              <img
                src="../../assets/images/chairs.webp"
                alt="chairs"
                :style="`width:100%; height: 100%; transition: .3s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="item"
              v-bind="props"
              style="overflow: hidden; border-radius: 10px; height: 100%"
            >
              <img
                src="../../assets/images/iphones.webp"
                alt="iphones"
                :style="`width:100%; height: 100%; transition: .3s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="item"
              v-bind="props"
              style="overflow: hidden; border-radius: 10px; height: 100%"
            >
              <img
                src="../../assets/images/laptops.webp"
                alt="laptops"
                :style="`width:100%; height: 100%; transition: .3s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
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
    img {
      width: 100%;
    }
  }
}
</style>
