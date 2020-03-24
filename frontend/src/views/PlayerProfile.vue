<template>
  <div id="PlayerProfile">
    <div
      id="divTitle"
      class="d-flex justify-content-around d-flex align-items-center"
    >
      <h2>Informações Pessoal do Jogador</h2>
      <img src="../assets/bruxa.png" width="150px" />
    </div>

    <div>
      <b-nav tabs>
        <b-nav-item active>Status e baús</b-nav-item>
        <b-nav-item>Cards</b-nav-item>
      </b-nav>
    </div>

    <h1>{{ getPlayer.wins }}</h1>

    v-for="music in playlist.items" :key="music.id"
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'profile',
  components: {},
  computed: mapGetters(['getPlayer', 'getClan']),
  methods: {},
};
</script>

<style scoped>
#divTitle {
  margin-left: 15%;
  margin-right: 15%;
}
</style>
