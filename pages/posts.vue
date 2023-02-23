<template lang="pug">
NConfigProvider
  NMessageProvider
    NNotificationProvider
      h1 input form
      ProvideData
#query
  button(@click='load_data()') query
  tr
    th ID
    th name
    th age
    th gender
    th occupation
    th address
    th post
    th edit
  tr(v-for='(user,index) in users')
    td {{ user.id }}
    td {{ user.name }}
    td {{ user.age }}
    td {{ user.gender }}
    td {{ user.occupation }}
    td {{ user.address }}
    tr(v-for='(post,index) in user.posts')
      td {{ post.post }}
    td
      button(@click="editUser(user)") edit
      button(@click="deleteUser(user)") delete

  div userForm
    h2 Insert User
    div
      input(v-model='editedUser.name', type='text', placeholder='name')
    div
      input(v-model='editedUser.age', type='number', placeholder='age')
    div
      input(v-model='editedUser.gender', type='text', placeholder='gender')
    div
      input(v-model='editedUser.occupation', type='text', placeholder='occupation')
    div
      input(v-model='editedUser.address', type='text', placeholder='address')
    div
      textarea(v-model='editedUser.posts.post', cols="30", rows="10", type='text', placeholder='post')
    div
      button(@click='close') quit
      button(@click='save') save


        //- ul
        //-   li(v-for='(user,index) in users') {{ user.id }} : {{ user.name }}
        //- ul
        //-   li(v-for='(post,index) in posts') {{ post.user_id }} : {{ post.post }}


</template>

<script lang="ts" setup>
import {
  NConfigProvider,
  NMessageProvider,
  NNotificationProvider,
} from 'naive-ui'


import ProvideData from '../components/ProvideData.vue'

// import { useQuery } from '@nuxtjs/apollo'
import { defineComponent } from 'vue';

import UserQuery from '../apollo/UserQuery.gql'
import PostQuery from '../apollo/PostQuery.gql'
import InsertUser from '../apollo/InsertUser.gql'

const users = ref([])
const posts = ref([])

interface User {
  id: number | null;
  name: string | null;
  age: number | null;
  gender: string | null;
  address: string | null;
  occupation: string | null;
  post: string | null;
}

const defaultEditedUser: User = {
  id: null,
  name: null,
  age: null,
  gender: null,
  address: null,
  occupation: null,
  post: null
};

const load_data = (async() => {
  const userData = await useAsyncQuery(UserQuery)
  if(userData.data.value?.users){
    users.value = userData.data.value.users
  }
  const postData = await useAsyncQuery(PostQuery)
  if(postData.data.value?.posts){
    posts.value = postData.data.value.posts
  }
  console.log(users.posts.post)
})

const variables = ref({
  name: '',
  age: '',
  gender: '',
  occupation: '',
  address: '',
  posts: '',
});

const { mutate } = useMutation(InsertUser, { variables });
  (async () => {
    try {
      const { data } = await mutate();
      console.log('Mutation result:', data);
    } catch (error) {
      console.error(error);
      }
  })();




</script>

<style>
body {
  padding: 16px;
}
tr {
grid-auto-flow: 10px;
}

</style>
