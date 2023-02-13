<script setup lang="ts">
export default {
  props: {
    value: string
  },
}
</script>

<template lang="pug">
input(
  type= "text",
  placeholder="Search by city..."
  :value="value"
  @input="$emit('input',$event.target.value)"
)
button(type='button', onclick='addResearch')|Search

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