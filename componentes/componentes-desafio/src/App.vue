<template>
  <v-app>
    <app-navigation /> 
    <app-bar />
    <app-carousel />
    <app-footer />
  </v-app>
</template>
<script>
import nav from "./components/Navigation.vue";
import bar from "./components/Bar.vue";
import carousel from "./components/Carousel.vue";
import footer from "./components/Footer.vue";

export default {
  /* components: { nav, bar,carousel, footer,}, ----- / Poderia ser utilzado assim tambem - neste modo não precisa colocar o nome da tag e a variavel, basta repetir o nome da variavel importada*/ 

    /* components: {
    "appNavigation": nav,  ----/ Poderia usar desta forma definida em camelCase e o vue entende o app-navigation , o correto seria usar tag appNavigation 
    "appBar": bar,
    "appCarousel": carousel,
    "appFooter": footer,
  }, */

  components: {
    "app-navigation": nav, 
    "app-bar": bar,
    "app-carousel": carousel,
    "app-footer": footer,
  },
  

};
</script>
