<template lang="pug">
div
  .top-view
    h1 find your drive
      CarSearchBar
</template>

<style>
  .top-view {
    width: 100%;
    padding-bottom: 56.1%;
    background-image: url('https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    color: white;
    font-size: 64px;
  }
  /* タブレット */
  @media only screen and (max-width: 1000px) and (min-width: 768px) {
    .top-view{
      height: 300px;
      font-size: 32px;
      vertical-align: bottom;
    }
  }
    /* スマホ */
  @media only screen and (max-width: 767px) {
    .top-view {
      height: 200px;
      font-size: 16px;
    }
  }
</style>