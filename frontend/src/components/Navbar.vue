<template>
  <div id="divNavBar" class="border border-dark">
    <b-navbar id="navBar" type="dark" variant="primary">
      <b-navbar-brand class="ml-5 mb-0">
        <router-link tag="h1" :to="{ name: 'home' }">
          <img src="../assets/logoPekka.png" width="80px" />
          Royalitics</router-link
        >
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navBar',
};
</script>

<style scoped>
#navBar {
  background-color: #6d0b9a !important;
}
</style>
