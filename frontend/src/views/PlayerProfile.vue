<template>
  <div id="PlayerProfile">
    <div
      id="divTitle"
      class="d-flex justify-content-around d-flex align-items-center"
    >
      <h2>Informações Pessoal do Jogador</h2>
      <img src="../assets/bruxa.png" width="150px" />
    </div>
    <h1>{{ getPlayer.name }}</h1>
    <h6>{{ getPlayer.tag }}</h6>
    <div>
      <b-nav tabs>
        <b-nav-item
          :to="{ name: 'estatisticas' }"
          exact
          exact-active-class="active"
          >Estatísticas</b-nav-item
        >
        <b-nav-item :to="{ name: 'cartas' }" exact exact-active-class="active"
          >Cartas</b-nav-item
        >
      </b-nav>
    </div>

    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'profile',
  computed: mapGetters(['getPlayer']),
};
</script>

<style scoped>
#divTitle {
  margin-left: 15%;
  margin-right: 15%;
}
</style>
