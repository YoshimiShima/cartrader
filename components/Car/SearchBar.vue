<script setup>
const city = ref("");
const cityError = ref(false)

const handleSearch = () => {
  if(!city.value){
    return cityError.value = true
  }
  navigateTo(`/city/${city.value}/car`);
};
</script>

<template lang="pug">
.search-bar
  input(
    type= "text",
    placeholder="Search by city..."
    v-model="city"
  )
.search-button(type='button', onclick='handleSearch')

</template>
  <!-- //- <div class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
  //-   <input type="text" class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" :class="cityError? 'border-red-700 border' : ''" placeholder="Search by city..." v-model="city">
  //-   <button class="bg-sky-500 px-10 text-white" @click="handleSearch" >Search</button>
  //- </div> --> -->
<style>
  .search-bar {
    width: 250px;
    height: 10em;
    font-size: 40px;
    margin: 0 auto;
  }
  .search-button {
    color: blue;
  }
</style>