<template lang="pug">
NConfigProvider
  NMessageProvider
    NNotificationProvider
      h1 input form
      ProvideData

      button(@click='load_data()') query
      #query
        ul
          li(v-for='(user,index) in users') {{ user.name }}
        //- ul
        //-   li(v-for='(post,index) in posts') {{ post.post }}

</template>

<script lang="ts" setup>
import {
  NConfigProvider,
  NMessageProvider,
  NNotificationProvider,
} from 'naive-ui'


import ProvideData from '../components/ProvideData.vue'

// import { useQuery } from '@nuxtjs/apollo'

import query from '../apollo/UserQuery.gql'
// import PostQuery from '../apollo/PostQuery.gql'


const users = ref([])
// const posts = ref([])

// const load_data = (async() => {
//   const { data: userData } = await useAsyncQuery(usersQuery)
//   if(userData?.value?.users){
//     users.value = userData.value.users
//   }
// })
const load_data = (async() => {
  const { data } = await useAsyncQuery(query)
  if(data.value?.users){
    users.value = data.value.users
  }
})
//   const { data: postData } = await useAsyncQuery(postsQuery)
//   if(postData?.value?.posts){
//     posts.value = postData.value.posts
//   }
// })

</script>

<style>
body {
  padding: 16px;
}
</style>
