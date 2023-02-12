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
input(
  type= "text",
  placeholder="Search by city..."
  v-model="city"
)
button(type='button', onclick='handleSearch')|Search

</template>
  <!-- //- <div class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
  //-   <input type="text" class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" :class="cityError? 'border-red-700 border' : ''" placeholder="Search by city..." v-model="city">
  //-   <button class="bg-sky-500 px-10 text-white" @click="handleSearch" >Search</button>
  //- </div> --> -->
<style>
  input {
    width: 400px;
    height: 40px;
    font-size: 32px;
    margin: 0 auto;
  }
  .button {
    color: blue;
  }
</style>