<template>
  <div class="layout">
    <v-layout>
      <CartDrawer />
      <AppNav />
      <v-main>
        <slot></slot>
      </v-main>
      <AppFooter />
    </v-layout>
  </div>
</template>

<script>
import AppFooter from "./AppFooter.vue";
import AppNav from "./AppNav.vue";
import CartDrawer from "./CartDrawer.vue";
export default {
  components: {
    AppNav,
    AppFooter,
    CartDrawer,
  },
};
</script>
