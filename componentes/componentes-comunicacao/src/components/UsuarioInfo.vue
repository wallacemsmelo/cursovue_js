<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ nome }}</strong></p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
    </div>
</template>

<script>
export default {
  /* props:[nome] ------> Validação de propriedades em formato array tbm pode usar, mas como objeto e mais usado*/
  
  /* props: {
    nome:{
        type: String, ------> Valida a propriedade e informa que essa propriedade e obrigatoria para funcionar o
        required: true
        default: 'Anônimo'
    } 
  }*/

  props: {
    nome: String /* Validando propriedades - informa que o valor exportado recebido deve ser um string sempre*/,
  },
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
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
