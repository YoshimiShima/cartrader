<template lang="pug">
header
  .nav-logo
    a(href="/") Cartrader
</template>

<style>
.nav-logo {
  font-family: 'Courier New', Courier, monospace;
  color: gray;
  font-size: 32px;
  display: flex;
  padding: 20px;
  background-color: cadetblue;
}
@media only screen and (max-width: 1000px) and (min-width: 768px) {
  .nav-logo {
    font-size: 24px;
  }
}
@media only screen and (max-width: 767px) {
  .nav-logo {
    font-size: 18px;
  }
}
</style>