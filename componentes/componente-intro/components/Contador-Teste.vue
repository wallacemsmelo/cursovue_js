<template>
  <div class="contador">
    <p>{{ idName }}:<span>{{ numero }}</span></p>
    <button @click="adicionar">+</button>
    <button @click="remover">-</button>
    <button @click="extra">ex</button>
  </div>
</template>

<script>
// eslint-disable-next-line
export default {
  /* quando criamos um componente, dentro da export default são passados os metodos  */
  data() {
    /* o atributo DATA tem que retornar algo, neste exemplo esta retorno um objeto com o variavelnumero */
    return {
    numero: 0,
      idName: 'Identificador',
      adicional: 2,
    };
  },
  methods: {
    adicionar() {
      this.numero++;
    },
    remover() {
      this.numero--;
    },
    extra() {
      this.numero += this.adicional;
    },
  },
};
</script>

<style scoped> /* definição de escopo padrão de cores para este componente hierarquia de PAI > FILHO somente, NETOS não recebem o estilo */
span {
  border-bottom: 1px solid #ccc;
  height: 30px;
  padding: 5px 25px;
}

 button {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: coral;
  color: white;
  margin-left: 10px;
  outline: none;
}
</style>
