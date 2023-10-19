<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>COMPONENTE FILHO</p>
        <p>Nome do Usuário: <strong>{{ nome }}</strong></p>
        <p>Idade do usuário: <strong>{{ idade }}</strong></p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciarNome">Reiniciar nome</button>
        <button @click="reiniciarFn">Reiniciar Callback</button>  <!--  Este botão esta chamando um função que esta contida no elemento Pai - CALLBACK-->
    </div>
</template>

<script>
export default {
  /* props:[nome] ------> Validação de propriedades em formato array tbm pode usar, mas como objeto e mais usado*/
  /*  props: {
    nome: String------> Validando propriedades - informa que o valor exportado recebido deve ser um string sempre,
  }, */
  props: {
    nome: {
      type: String /*Valida a propriedade e informa que essa propriedade e obrigatoria para funcionar o*/,
      //required: true,
      default: "Anônimo",
    },
    idade: Number,
    reiniciarFn: Function/* Este atributo esta sendo exportado para o componente PAI */,
  },
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reiniciarNome() {
      //Enviando o comando para reiniciar nome para o componente pai this.nome e this.$emit()
      this.nome = "Pedro";
      this.$emit("nomeMudou", this.nome); //$EMIT: this.$emit('nomedoevento', variavel como um objeto{ com varias variaveis})
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
