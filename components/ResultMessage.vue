<script>
export default {
  data () {
    return {
      result: ''
    }
  }
}
</script>

<template lang="pug">
h1(v-if="result")
  span you can definitely get a
  |  {{ result }}
  span  !!
h1(v-else)| please tell me
</template>