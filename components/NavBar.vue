<template lang="pug">
header
  .nav-logo
    a(href="/") Cartrader
      p.box
</template>

<style>
.nav-logo {
  font-family: 'Courier New', Courier, monospace;
  color: gray;
  font-size: 32px;
  font-weight: 900;
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
.p {
  border-bottom: 1px solid gray;
}
</style>