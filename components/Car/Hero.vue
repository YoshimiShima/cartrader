<template lang="pug">
div
  .top-view
    .h1.h1 find your drive
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
    font-size: 30px;
    position:relative;
  }
  .h1 {
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