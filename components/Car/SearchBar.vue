<script>
export default {
  props: {
    value: String
  },
}
</script>
<!-- v-model="value" -->
<template lang="pug">
input(
  type= "text",
  placeholder="Search by city..."
  @input="$emit('input',newValue)"
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