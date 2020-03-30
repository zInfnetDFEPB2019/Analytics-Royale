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
        <b-nav-item active>Estatísticas</b-nav-item>
        <b-nav-item>Clã</b-nav-item>
      </b-nav>
    </div>


    <!-- v-for="music in playlist.items" :key="music.id" -->

    <Statistics maximoTrofeus="1000" />
  </div>
</template>

<script>
import Statistics from '@/components/Statistics';

export default {
  name: 'profile',
  components: { Statistics },
  
  methods: {},
};
</script>

<style scoped>
#divTitle {
  margin-left: 15%;
  margin-right: 15%;
}
</style>
