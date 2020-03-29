<template>
  <div>
    <footer>
      <h6>
        Royalytics não é patrocinado pela Supercell e nenhuma de suas afiliadas.
      </h6>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'footer',
};
</script>

<style scoped>
footer {
  /* Comentei essa linha por que ela estava ficando por cima das informações de Estatisticas */
  /* position: fixed; */
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  padding: 20px 20px;
}
</style>
