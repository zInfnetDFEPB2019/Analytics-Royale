<template>
  <div id="divHome">
    <!-- NavBar -->
    <NavBar />

    <!-- Corpo da pagina -->
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
  }
};
</script>
