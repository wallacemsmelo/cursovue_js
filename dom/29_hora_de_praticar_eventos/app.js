new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        botaoClicado(){
             alert('O botão foi precionado!')   
        },

        teclasDown(event){
           this.valor = event.target.value
        },

        teclasAlerta(event){
            alert('O botão Enter foi precionado!') 
         }
       
    }
})