<template>
  <div class="app-nav">
    <v-app-bar :app="true">
      <v-app-bar-nav-icon @click="openCart"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],
  data() {
    return {};
  },
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
};
</script>
