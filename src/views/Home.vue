<template>
  <div id="home">
    <!-- NavBar -->
    <Navbar />
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
                v-model="searchOption"
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

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
require('dotenv').config();

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

async function getClasherInfo(event) {
  event.preventDefault();

  const searchTag = this.searchTag;
  const searchOption = this.searchOption;
  const url = '';
  console.log(url);

  try {
    const response = await axios.post(url, {
      data: {
        searchTag,
        searchOption,
      },
    });
    console.log(response.data.body);
  } catch (error) {
    console.log(error);
  }
}

export default {
  name: 'home',
  props: {},
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      searchOption: '1',
      options: [
        { value: '1', text: 'Jogador' },
        { value: '2', text: 'Clã' },
      ],
      searchTag: '',
    };
  },
  types: ['searchTag', 'searchOption'],
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
