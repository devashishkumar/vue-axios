<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// const DATA_URL = "https://api.covid19india.org/state_district_wise.json";
import axios from 'axios';
const DATA_URL = 'http://localhost:3000/users';

@Options({
  components: {
    HelloWorld
  }, created() {
    // fetch(DATA_URL)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     window.console.log(data, '22');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    axios.get('/users').then((response) => {
      window.console.log(response)
    }, (error) => {
      window.console.log(error);
    });
  },
})
export default class Home extends Vue {}
</script>
