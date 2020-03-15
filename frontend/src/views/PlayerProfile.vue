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
        <b-nav-item active>Batle</b-nav-item>
        <b-nav-item>Decks</b-nav-item>
        <b-nav-item>Cards</b-nav-item>
        <b-nav-item>Analytics</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  components: {},
};
</script>

<style scoped>
#divTitle {
  margin-left: 15%;
  margin-right: 15%;
}
</style>
