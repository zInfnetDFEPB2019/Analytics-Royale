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
    <RodaPe />
  </div>
</template>

<script>
import NavBar from "./NavBar";
import RodaPe from "./RodaPe";

export default {
  name: "divHome",
  components: {
    NavBar,
    RodaPe
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
