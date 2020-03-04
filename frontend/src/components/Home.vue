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
              <b-button v-on:click="getClasherInfo" type="submit" size="lg" variant="warning">
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
      let url = `https://api.clashroyale.com/v1/players/${searchTag}`;
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
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQwZTI2OTE4LTUxZGEtNDg4MS1hYWVkLThmZjc1NzE0YjQ1NCIsImlhdCI6MTU4MzMyMDEwMSwic3ViIjoiZGV2ZWxvcGVyLzhhZmExMjEyLWYxMjktMzlhMS0xOGE5LWY5NGVhNjEzMDE1MiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxODkuMTE4LjI0OS4zMSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.V04O-SxvU1P8QtaPWE4r8de9d6Xsnf2pgwsZNawNZTbyyGhustlqr5barSFd9khrQdWwUa8F8ZxnzpBJKlrfEg"
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
