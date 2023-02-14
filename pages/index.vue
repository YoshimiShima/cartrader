<script>
// useHead({
//   title: "Cartrader",
// });
import Hero from '../components/Car/Hero.vue'
export default {
  components: {
    Hero
  },
  data () {
    return {
      message: 'your result:'
    }
  },
  methods: {
    receiveMessage(message) {
      this.message = message;
    }
  }
}

</script>

<template lang="pug">
.page
  .carHero
    CarHero
  .result
    h1(value="text" @received-message="receiveMessage") {{ message }}


</template>

<style>
.page{
  display: grid;
  height: 1500px;
  grid-template-rows:48% 52%;
  grid-template-columns: 100%;
}
.carHero{
  grid-row: 1;
  grid-column: 1;
}
.result{
  grid-row: 2;
  grid-column: 1;
  font-size: 48px;
  color: sienna;
  font-family: serif;
}
/* タブレット */
  @media only screen and (max-width: 1000px) and (min-width: 768px) {
    .page{
      height:1000px;
    }
    .result{
      font-size: 24px;
    }
  }
    /* スマホ */
  @media only screen and (max-width: 767px) {
    .page{
      height:600px;
    }
    .result{
      font-size: 12px;
    }
    }
  </style>