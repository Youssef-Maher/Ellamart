<template>
  <div class="layout">
    <v-app>
      <v-layout>
        <CartDrawer />
        <MenuDrawer />
        <AppNav v-show="windowWidth > 990" />
        <ResponsiveNav v-show="windowWidth <= 990" />
        <v-main :style="{ paddingTop: windowWidth > 990 ? '70px' : '75px' }">
          <slot></slot>
        </v-main>
        <AppFooter />
      </v-layout>
    </v-app>
  </div>
</template>

<script>
import AppFooter from "./AppFooter.vue";
import AppNav from "./AppNav.vue";
import CartDrawer from "./CartDrawer.vue";
import MenuDrawer from "./MenuDrawer.vue";
import ResponsiveNav from "./ResponsiveNav.vue";
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },

  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
  components: {
    AppNav,
    AppFooter,
    CartDrawer,
    ResponsiveNav,
    MenuDrawer,
  },
};
</script>
