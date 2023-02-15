


<template lang="pug">
h1(v-if="message")
  span you can definitely get a
  |  {{ message }}
  span  !!
h1(v-else)| please tell me
</template>