<template>
  <div id="app">
    <h1>{{ titulo }}</h1>
    <button @click="titulo += '#'">adicionar #</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      titulo: "Teste data usando Vue.js!!",
    };
  },
};
</script>

<style>
#app{
  background-color: chocolate;
  color: white;
}
</style>
