<template>
  <div id="home">
    <!-- Corpo da pagina -->
    <div class="d-flex justify-content-center">
      <div id="divImagem">
        <b-form
          id="divInput"
          @submit.prevent="onSubmit"
          class="d-flex align-items-end"
        >
          <b-input-group size="lg">
            <b-form-input
              v-model="searchParams.searchTag"
              id="searchTag"
              name="searchTag"
              type="text"
              required
              placeholder="Procurar..."
            ></b-form-input>
            <b-input-group-append>
              <b-form-select
                size="lg"
                id="searchType"
                name="searchType"
                v-model="searchParams.searchType"
                :options="options"
                value-field="value"
              ></b-form-select>
              <b-button type="submit" size="lg" variant="warning">
                <b-icon icon="search" aria-hidden="true"></b-icon>
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
require('dotenv').config();
import { mapActions } from 'vuex';
export default {
  name: 'home',
  props: {},
  components: {},
  data: () => ({
    searchParams: {
      searchTag: '',
      searchType: '1',
    },
    options: [
      { value: '1', text: 'Jogador' },
      { value: '2', text: 'Clan' },
    ],
  }),
  methods: {
    ...mapActions(['getInfo']),

    onSubmit() {
      this.getInfo(this.searchParams);

      this.$router.push({ path: '/profile' });
    },
  },
};
</script>

<style scoped>
#divImagem {
  height: 80vh;
  width: 70%;

  background-image: url(../assets/clash-royale-rei.png);
  background-repeat: no-repeat;

  background-position-x: right;
  background-position-y: center;

  background-size: 30%;
}

#divInput {
  height: 65%;
  width: 87%;
}
</style>
