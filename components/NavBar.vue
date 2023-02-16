<template lang="pug">
header
  .header-link
    a(href="/") Cartrader
    nav
      NuxtLink(to="./Detail") recommend
    p.box
</template>

<style>
.header-link {
  font-family: 'Courier New', Courier, monospace;
  color: gray;
  font-size: 36px;
  font-weight: 900;
  display: flex;
  grid-column-gap: 20px;
  padding: 20px;

  background-color: cadetblue;
}
@media only screen and (max-width: 1000px) and (min-width: 768px) {
  .header-link {
    font-size: 28px;
  }
}
@media only screen and (max-width: 767px) {
  .header-link {
    font-size: 12px;
  }
}
.p {
  border-bottom: 1px solid gray;
}
</style>