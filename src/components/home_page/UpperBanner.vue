<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col>
            <div class="content">
              <h1>
                <span>Huge Savings</span> on<br />
                UHD Televisions
              </h1>
              <p>sale up to 70% off on Sony Television</p>
              <v-btn
                to="/products/smartphones"
                class="main-btn"
                variant="outlined"
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
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(../../assets/images/banner-bg.jpg);
    background-size: cover;
    background-position: center;
    color: white;
    padding: 50px 100px 80px;
    .content {
      h1 {
        font-size: 65px;
        text-shadow: 1px 1px 50px black;
        span {
          color: #19ffff;
        }
      }
      p {
        font-size: 22px;
      }
      .main-btn {
        margin-top: 50px;
        border-radius: 30px;
        border: thin solid currentColor;
        text-transform: uppercase;
        height: auto;
        padding: 12px 35px;
      }
    }
  }
}
// Media Queries
@media (max-width: 990px) {
  .banner .parent {
    padding: 40px;
    .content {
      h1 {
        font-size: 37px;
      }
      p {
        font-size: 15px;
      }
      .main-btn {
        margin-top: 20px;
      }
    }
  }
}
@media (max-width: 580px) {
  .banner .parent {
    padding: 10px;
    .content {
      p {
        font-size: 15px;
      }
      .main-btn {
        padding: 10px 28px;
        font-size: 10px;
      }
    }
  }
}
</style>
