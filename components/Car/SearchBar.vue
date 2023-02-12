<script setup>
// const city = ref("");
// const cityError = ref(false)

// const handleSearch = () => {
//   if(!city.value){
//     return cityError.value = true
//   }
//   navigateTo(`/city/${city.value}/car`);
// };
</script>

<template lang="pug">
input(
  type= "text",
  placeholder="Search by city..."
  v-model="city"
)
button(type='button', onclick='handleSearch')|Search

</template>

<style>
  input {
    width: 400px;
    height: 40px;
    font-size: 32px;
    margin: 0 auto;
  }
  button {
    color: blue;
  }
</style>