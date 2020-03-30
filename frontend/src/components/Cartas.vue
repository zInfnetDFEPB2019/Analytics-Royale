<template>
  <div class="container">
    <div class="row">
      <div class="col-1" :key="cartas.id" v-for="cartas in getPlayer.cards">
        <div class="card">
          <img
            :src="cartas.iconUrls.medium"
            class="card-img-top"
            alt="imagem da carta"
            width="50px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters(['getPlayer']),
};
</script>

<style scoped></style>
