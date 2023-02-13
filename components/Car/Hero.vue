<script setup lang="ts">
import SearchBar from './components/Car/SearchBar.vue'
export default {
  components: {
    SearchBar
  },
  data () {
    return {
      value: 'find your drive'
    }
  }
}
</script>
<!-- //- .h1.h1 find your drive -->
<template lang="pug">
div
  .top-view
    .top-bg
      searchBar v-bind:val="value"
        CarSearchBar
</template>

<style>
  .top-view {
    width: 100%;
    height: 800px;
    background-image: url('https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    color: white;
    position:relative;
  }
  .top-bg {
    width: 100%;
    height: 800px;
    background-color: rgba(0,0,0,0.6);
  }
  .searchBar {
    position:absolute;
    font-size: 64px;
    font-family: serif;
    font-weight: 900;
    top:50%;
    left:50%;
    margin:0px;
    transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
  }
  /* タブレット */
  @media only screen and (max-width: 1000px) and (min-width: 768px) {
    .top-view{
      height: 300px;
      font-size: 32px;
      vertical-align: bottom;
    }
    .h1{
      font-size: 48px;
    }
  }
    /* スマホ */
  @media only screen and (max-width: 767px) {
    .top-view {
      height: 200px;
      font-size: 16px;
    }
    .h1 {
      font-size: 18px;
    }
  }
</style>