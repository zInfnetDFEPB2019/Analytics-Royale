<template>
  <div id="divHome">
    <!-- NavBar -->
    <NavBar />
    <!-- Corpo da pagina -->
    <div class="d-flex justify-content-center">
      <div id="divImagem">
        <div id="divInput" class="d-flex align-items-end">
          <b-form @submit="getClasherInfo" size="lg">
            <b-form-input v-model="tag" :id="`type-${type}`" :type="type" placeholder="Procurar..."></b-form-input>
            <!-- <b-input-group-append> -->
            <b-form-select
              size="lg"
              v-model="selected"
              :options="options"
              value-field="value"
              text-field="text"
            ></b-form-select>

            <b-button type="submit" size="lg" variant="warning">
              <b-icon icon="search" aria-hidden="true"></b-icon>
            </b-button>
            <!-- </b-input-group-append> -->
          </b-form>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
require("dotenv").config();

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
      selected: "1",
      options: [
        { value: "1", text: "Jogador" },
        { value: "2", text: "Clã" }
      ],
      tag: "",
      clasher: ""
    };
  },
  types: ["tag"],

  methods: {
    async getClasherInfo(event) {
      /*eslint-disable no-console*/
      console.log("chegou no getClasherInfo");
      event.preventDefault();

      let playerTag = this.tag;

      if (playerTag.includes("#")) {
        playerTag = playerTag.replace("#", "%23");
      }

      const url = `https://api.clashroyale.com/v1/players/${playerTag}`;
      const option = {
        headers: {
          Authorization: process.env.API_TOKEN
        }
      };

      try {
        const result = await axios.get(url, option);

        /*eslint-disable no-console*/
        console.log(result);
        console.log("é isso! try");
      } catch (error) {
        console.log("é isso! catch");
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
