<template>
  <div id="home">
    <!-- Corpo da pagina -->
    <div class="d-flex justify-content-center">
      <div id="divImagem">
        <div id="divInput" class="d-flex align-items-end">
          <b-input-group size="lg">
            <b-form-input
              v-model="searchTag"
              id="input-1"
              :type="type"
              required
              placeholder="Procurar..."
            ></b-form-input>
            <b-input-group-append>
              <b-form-select
                size="lg"
                v-model="searchType"
                :options="options"
                value-field="value"
                text-field="text"
              ></b-form-select>
              <b-button
                v-on:click="getClasherInfo"
                type="submit"
                size="lg"
                variant="warning"
              >
                <b-icon icon="search" aria-hidden="true"></b-icon>
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../services/api';
require('dotenv').config();

async function getClasherInfo(event) {
  event.preventDefault();

  const searchTag = this.searchTag;
  const searchType = this.searchType;

  try {
    const response = await api.post('/', { searchTag, searchType });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default {
  name: 'home',
  props: {},
  components: {},
  data() {
    return {
      searchType: '1',
      options: [
        { value: '1', text: 'Jogador' },
        { value: '2', text: 'Clã' },
      ],
      searchTag: '',
    };
  },
  types: ['searchTag', 'searchType'],
  methods: {
    getClasherInfo,
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
