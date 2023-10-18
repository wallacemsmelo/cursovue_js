<template>
 <div class="container">
  <p>Nome:<span>{{ concatenar() }}</span></p>
  <p>Endereço:<span>{{ endereco }}</span></p>
  <p>Telefone:<span>{{ celular }}</span></p>
  <button @click="novoNome('Miguel', 'Santos')">Novo nome</button>
  <button @click="concatenar" >Concatenar</button>
 </div>
</template>
<script>
// eslint-disable-next-line
export default {
  /* quando criamos um componente, dentro da export default são passados os metodos  */
  data() {
    /* o atributo DATA tem que retornar algo, neste exemplo esta retorno um objeto com o variavelnumero */
    return {
      nome:'Wallace',
      sNome:'Melo',
      endereco:'Rua Princesa Isabel',
      celular: '(27)99618-7124'
    };
  },
  methods: {
    concatenar() {
      return this.nome+' '+this.sNome;
    },
    novoNome(novo, sNovoNome) {
      this.nome = novo ;
      this.sNome = sNovoNome
    },
  },
};
</script>

<style>
.container span {
  border-bottom: 1px solid #ccc;
  height: 30px;
  padding: 5px 25px;
}
.container button {
  height: 30px;
  width: 100px;
  
  background-color: coral;
  color: white;
  margin-left: 10px;
  outline: none;
}
</style>
