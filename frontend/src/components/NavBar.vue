<template>
  <div id="divNavBar" class="border border-dark">
    <b-navbar id="navBar" type="dark" variant="primary">
      <b-navbar-brand class="ml-5" href="./Home.vue"
        ><h1>Royalytics</h1></b-navbar-brand
      >

      <b-collapse id="nav-collapse" class="ml-5" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"><h5>Sobre nós</h5></b-nav-item>
          <b-nav-item href="#"><h5>Atualizações</h5></b-nav-item>
        </b-navbar-nav>

        <b-navbar-brand href="#" class="ml-auto">
          <img src="../assets/logoClashRoyale.png" alt="Clash Royale" />
        </b-navbar-brand>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "divNavBar"
};
</script>
