<template>
  <div class="layout">
    <v-app>
      <v-layout>
        <CartDrawer />
        <AppNav />
        <FixedNav />
        <v-main style="padding-top: 140px">
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
import FixedNav from "./FixedNav.vue";
export default {
  components: {
    AppNav,
    AppFooter,
    CartDrawer,
    FixedNav,
  },
};
</script>
