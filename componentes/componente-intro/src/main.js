import Vue from 'vue'
import App from './App.vue' /* importação da pagina */
import Contadores from '../components/Contadores-Teste.vue' /* importação de um componente */
import Nome from '../components/Nome-Teste.vue'

Vue.config.productionTip = false
Vue.component('app-contadores', Contadores)
Vue.component('app-nome', Nome) /* referenciando o componente a o um TAG passando o nome da tag e a variavel contendo o componente */

new Vue({
  render: h => h(App), /* App e o nome da pagina de index do projeto, pode ser alterado para qualquer nome */
}).$mount('#app')
