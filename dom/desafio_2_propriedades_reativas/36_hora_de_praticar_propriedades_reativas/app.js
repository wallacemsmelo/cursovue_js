new Vue({
  el: "#desafio",
  data: {
    valor: 0,
  },
  computed: {
    resultado() {
      return this.valor !== 37 ? "Valor Diferente" : "Valor Igual";
    },
  },
  watch: {
    valor(novo, antigo) {
      setTimeout(() => {
        this.valor = 0;
      }, 10000);
    },
  },
});

// <!-- 1) Exibir em "resultado" o texto 'Valor Diferente' enquanto
// "valor" for diferente de 37 - "valor" é alterado pelos botões.
// Mostrar 'Valor Igual' quando "valor" for igual a 37 -->
