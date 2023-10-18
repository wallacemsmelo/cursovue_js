import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import nav from "./components/Navigation.vue";
import bar from "./components/Bar.vue";
import carousel from "./components/Carousel.vue";
import footer from "./components/Footer.vue";

Vue.config.productionTip = false;
Vue.component("app-navigation", nav);
Vue.component("app-bar", bar);
Vue.component("app-carousel", carousel);
Vue.component("app-footer", footer);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
