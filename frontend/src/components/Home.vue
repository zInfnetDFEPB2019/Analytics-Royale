<template>
  <div id="divHome">
    <!-- NavBar -->
    <NavBar />

    <!-- Corpo da pagina -->
    <div class="d-flex justify-content-center">
      <div id="divImagem">
        <div id="divInput" class="d-flex align-items-end">
          <b-input-group size="lg">
            <b-form-input id="input" placeholder="Procurar..."></b-form-input>
            <b-input-group-append>
              <b-form-select
                size="lg"
                v-model="selected"
                :options="options"
                value-field="value"
                text-field="text"
                disabled-field="notEnabled"
              >
              </b-form-select>

              <b-button size="lg" variant="warning">
                <b-icon icon="search" aria-hidden="true"></b-icon>
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
      </div>
    </div>

    <!-- Rodape -->
  </div>
</template>

<script>
import NavBar from "./NavBar";

export default {
  name: "divHome",
  components: {
    NavBar
  },
  props: {
    titulo: String
  },
  data() {
    return {
      selected: "Jogador",
      options: [
        { value: "Jogador", text: "Jogador" },
        { value: "Clã", text: "Clã" }
      ]
    };
  }
};
</script>

<style>
#divHome {
  height: 100vh;
}

#divImagem {
  height: 100vh;
  width: 70%;

  background-image: url(../assets/Rei.png);
  background-repeat: no-repeat;

  background-position-x: right;
  background-position-y: center;

  background-size: 40%;
}

#divInput {
  height: 66%;
  width: 83%;
}
</style>
