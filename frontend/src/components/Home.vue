<template>
  <div id="divHome">
    <!-- NavBar -->
    <NavBar />

    <!-- Corpo da pagina -->
    <div id="corpo" class="d-flex justify-content-center">
      <b-col sm="6" class="align-self-center">
        <b-input-group size="lg" class="mb-3">
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
      </b-col>
    </div>
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
#corpo {
  height: 85vh;
}
</style>
