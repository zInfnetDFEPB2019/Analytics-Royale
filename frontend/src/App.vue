<template>
  <div id="app">
    <Home titulo="Analytics Royale" />
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style lang="scss">
@import "./assets/Styles/_variables.scss";
@import "bootstrap/scss/bootstrap";
@import "./assets/Styles/_bootswatch.scss";
</style>
