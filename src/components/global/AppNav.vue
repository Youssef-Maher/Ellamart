<template>
  <div class="nav-bar">
    <v-app-bar color="#161880" height="fit-content">
      <v-container fluid>
        <v-row>
          <v-col cols="3" class="d-flex align-center">
            <router-link to="/"
              ><img src="@/assets/images/logo.png" alt=""
            /></router-link>
          </v-col>
          <v-col cols="5" class="d-flex align-center">
            <div class="position-relative" style="width: 90%">
              <input
                class="py-3 px-5 bg-white"
                style="width: 100%; border-radius: 30px; outline: none"
                type="search"
                name="navSearch"
                id="navSearch"
                placeholder="Search for Products"
              />
              <v-icon
                style="
                  position: absolute;
                  right: 10px;
                  top: 50%;
                  transform: translateY(-50%);
                  color: black;
                  cursor: pointer;
                "
                >mdi-magnify</v-icon
              >
            </div>
          </v-col>
          <v-col cols="4">
            <div
              class="parent text-white d-flex justify-space-between align-center"
            >
              <div class="available">
                <span>Available 24/7 at</span><br />
                <strong> (090) 123-4567</strong>
              </div>
              <div class="wishlist d-flex flex-column align-center">
                <v-icon class="my-2">mdi-heart-outline</v-icon>
                <span>Wishlist</span>
              </div>
              <div class="sign-in d-flex flex-column align-center">
                <v-icon class="my-2">mdi-account-outline</v-icon>
                <span>Sign-in </span>
              </div>
              <div
                class="cart d-flex flex-column align-center"
                @click="openCart"
              >
                <v-badge
                  location="right top"
                  content="2"
                  color="blue"
                  offset-x="-12"
                  offset-y="3"
                  style="z-index: 9999"
                ></v-badge>
                <v-icon class="my-2">mdi-cart-outline</v-icon>
                <span>Cart </span>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <ul class="d-flex text-white">
              <li>one</li>
            </ul>
          </v-col>
          <v-col cols="4" class="d-flex justify-end" style="gap: 25px">
            <div class="help d-flex align-center">
              <v-icon>mdi-headset</v-icon>
              <span>Help</span>
            </div>
            <div id="language-btn" class="lang d-flex align-center">
              <v-icon>mdi-web</v-icon>
              <span class="px-1"
                >{{ selectedLang[0].lang }} /
                {{ selectedLang[0].currency }}</span
              >
              <v-icon>mdi-chevron-down</v-icon>
              <v-menu activator="#language-btn">
                <v-list v-model:selected="selectedLang">
                  <v-list-item
                    v-for="item in langs"
                    :key="item.lang"
                    :value="item"
                  >
                    <v-list-item-title
                      >{{ item.lang }} {{ item.currency }}</v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <!-- <v-app-bar-nav-icon @click="openCart"></v-app-bar-nav-icon> -->
    </v-app-bar>
  </div>
</template>
<script>
export default {
  inject: ["Emitter"],
  data() {
    return {
      selectedLang: [{ lang: "EN", currency: "USD" }],
      langs: [
        { lang: "EN", currency: "USD" },
        { lang: "DE", currency: "EURO" },
      ],
    };
  },
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
};
</script>
<style lang="scss">
.parent {
  div {
    i::before {
      font-size: 30px;
      color: #fec422;
    }
  }
}
.wishlist,
.sign-in,
.cart,
.help,
.lang {
  cursor: pointer;
}
li {
  list-style: none;
  padding: 0 10px;
}
.help {
  gap: 5px;
}
input {
  caret-color: #000000;
}
input:focus::placeholder {
  opacity: 0;
}

input::placeholder {
  transition: opacity 0.3s ease;
}
</style>
