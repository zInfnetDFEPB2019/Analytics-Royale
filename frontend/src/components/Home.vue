<template>
  <div id="divHome">
    <!-- NavBar -->
    <NavBar />
    <!-- Corpo da pagina -->
    <div class="d-flex justify-content-center">
      <div id="divImagem">
        <div id="divInput" class="d-flex align-items-end">
          <b-input-group size="lg">
            <b-form-input
              v-model="tag"
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
import axios from "axios";
require("dotenv").config();

import NavBar from "./NavBar";
import Footer from "./Footer";

export default {
  name: "divHome",
  components: {
    NavBar,
    Footer
  },
  props: {
    titulo: String
  },
  data() {
    return {
      searchOption: "1",
      options: [
        { value: "1", text: "Jogador" },
        { value: "2", text: "Clã" }
      ],
      tag: ""
    };
  },
  types: ["tag", "searchOption"],

  methods: {
    async getClasherInfo(event) {
      event.preventDefault();

      let searchTag = this.tag;
      let url = `https://https://api.clashroyale.com/v1/players/${searchTag}`;
      /*eslint-disable no-console*/
      console.log(url);

      if (searchTag.includes("#")) {
        searchTag = searchTag.replace("#", "%23");
      }

      if (this.searchOption === "2") {
        url = url.replace("players", "clans");
      }

      const option = {
        headers: {
          Authorization: process.env.API_TOKEN
        }
      };

      try {
        const result = await axios.get(url, option);
        /*eslint-disable no-console*/
        console.log(result);
        console.log("SUCCESS!");
      } catch (error) {
        console.log(error);
        console.log("FAIL!");
      }
    }
  }
};
</script>

<style>
#divImagem {
  height: 80vh;
  width: 70%;

  background-image: url(../assets/Rei.png);
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
