<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="8">
            <div class="content">
              <h1><span>Huge Savings</span> on UHD Televisions</h1>
              <p>sale up to 70% off on Sony Television</p>
              <v-btn class="main-btn py-3 px-10" variant="outlined"
                >shop now</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  .parent {
    background: url(../../assets/images/banner-bg.jpg);
    background-size: cover;
    background-position: center;
    color: white;
    padding: 50px 100px 80px;
    .content {
      h1 {
        font-size: 70px;
        text-shadow: 1px 1px 57px black;
        span {
          color: #19ffff;
        }
      }
      p {
        font-size: 25px;
      }
      .main-btn {
        margin-top: 80px;
        border-radius: 30px;
        border: thin solid currentColor;
        text-transform: uppercase;
        height: auto;
      }
    }
  }
}
</style>
