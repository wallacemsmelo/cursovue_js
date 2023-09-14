new Vue({
    el: "#desafio",
    data:{
        nome: 'Wallace Melo',
        idade: 35,
        imagem2: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        multi() {
            return this.idade * 3
        },

        mathRand(){
            return Math.random()
        },

        
        
    }
})

