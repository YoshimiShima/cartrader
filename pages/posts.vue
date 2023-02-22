<template lang="pug">
NConfigProvider
  NMessageProvider
    NNotificationProvider
      h1 input form
      ProvideData

      button(@click='load_data()') query
      #query
        ul
          li(v-for='(user,index) in users') {{ user.id }} : {{ user.name }}
        ul
          li(v-for='(post,index) in posts') {{ post.user_id }} : {{ post.post }}

</template>

<script lang="ts" setup>
import {
  NConfigProvider,
  NMessageProvider,
  NNotificationProvider,
} from 'naive-ui'


import ProvideData from '../components/ProvideData.vue'

// import { useQuery } from '@nuxtjs/apollo'

import UserQuery from '../apollo/UserQuery.gql'
import PostQuery from '../apollo/PostQuery.gql'

const users = ref([])
const posts = ref([])

// const load_data = (async() => {
//   const userData = await useAsyncQuery(UserQuery)
//   if(userData?.value?.users){
//     users.value = userData.value.users
//   }

//   const postData = await useAsyncQuery(PostQuery)
//   if(postData?.value?.posts){
//     posts.value = postData.value.posts
//   }
// })
const load_data = (async() => {
  const userData = await useAsyncQuery(UserQuery)
  if(userData.data.value?.users){
    users.value = userData.data.value.users
  }
  const postData = await useAsyncQuery(PostQuery)
  if(postData.data.value?.posts){
    posts.value = postData.data.value.posts
  }
})


</script>

<style>
body {
  padding: 16px;
}

</style>
