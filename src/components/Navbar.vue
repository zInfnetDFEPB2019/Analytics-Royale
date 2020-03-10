<template>
  <div id="divNavBar" class="border border-dark">
    <b-navbar id="navBar" type="dark" variant="primary">
      <b-navbar-brand class="ml-5">
        <router-link :to="{ name: 'home' }">Royalitics</router-link>
      </b-navbar-brand>

      <b-collapse id="nav-collapse" class="ml-5 white" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link :to="{ name: 'about' }">Sobre nós</router-link>
          </b-nav-item>
          <b-nav-item>Atualizações</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
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
