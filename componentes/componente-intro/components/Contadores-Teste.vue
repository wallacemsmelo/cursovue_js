<template>
  <div class="contadores">
    <app-contador v-for="c in 5" :key="c"/>
  </div>
</template>

<script>
// eslint-disable-next-line
import Contador from "./Contador-Teste.vue";
export default {
  // Registro local
  components: { "app-contador": Contador },
};
</script>

<style></style>
