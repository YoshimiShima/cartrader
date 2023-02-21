<template lang="pug">
NConfigProvider
  NMessageProvider
    NNotificationProvider
      h1 input form
      ProvideData
#usersQuery
  ul
    li {{ user.posts }}

</template>

<script lang="ts" setup>
import {
  NConfigProvider,
  NMessageProvider,
  NNotificationProvider,
} from 'naive-ui'
  // @ts-ignore
import ProvideData from '../components/ProvideData.vue'

// import { useQuery } from '@nuxtjs/apollo'
// import usersQuery from '../graphql/query.gql'

// const { data } = useQuery(usersQuery)
// const users = ref(data.users)

// import users from '../apollo/query.gql'
// import { ref } from 'vue'
// const { clients, getToken, onLogin, onLogout } = useApollo()

const query = gql`
  query getUsers {
    users {
      id
      name
      age
      occupation
      age
      address
      gender
      posts {
        post
        id
        user_id
        created_at
      }
    }
  }
`
console.log ("query", users.post)
const { data } = await useAsyncQuery(query)
console.log ("query", users.post)
</script>

<style>
body {
  padding: 16px;
}
</style>
