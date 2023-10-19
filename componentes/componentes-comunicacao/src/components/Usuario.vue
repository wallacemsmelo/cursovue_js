<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>COMPONENTE PAI</p>
        <p>Nome é <strong>{{ nome }}</strong></p>
        <p>Idade do usuário: <strong>{{ idade }}</strong></p>
        <button @click="alterarNome">Alterar nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info :nome="nome"
            :idade="idade"
            :reiniciarFn="reiniciarNome" 
            @nomeMudou="nome= $event" /> <!-- Recebendo a alteração de nome solicitada pelo componente filho -->
            <!-- O retorno da função reiniciarNome esta sendo enviado para o atributo reiniciarFn contido no componente FILHO -->
            <app-usuario-editar
              :nome="nome"
              :idade="idade"
              @idadeMudou="idade = $event" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

export default {
  components: { AppUsuarioInfo, AppUsuarioEditar },
  data() {
    return {
      nome: "Pedro Silva",
      idade: 21
    };
  },
  methods: {
    alterarNome() {
      this.nome = "Ana Lopes";
    },

    reiniciarNome() {
      this.nome = "Pedro Silva";
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
