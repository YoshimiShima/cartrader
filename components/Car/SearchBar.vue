<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  props: {
    value:String
  },
  methods: {
    onClickEmit(){
      this.$emit('input-emit', this.value);
    }
  }
}
</script>
<!-- v-model="value" -->
<!-- @input="$emit('input-emit',value)" -->
<template lang="pug">
#search-bar
  input(
    type= "text",
    placeholder="Search by city..."
  )
  button(@click="onClickEmit")|Search

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