<template>
  <div>
    <b-container class="bv-example-row">
      <b-row align-v="center">
        <img src="../assets/clan-wars.png" width="50px" alt="Imagem do clan" />
        <h2>Nome do Clan</h2>
      </b-row>
      <hr />
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Statistic',
  components: {},
  computed: mapGetters(['getClan']),
};
</script>

<style scoped></style>
