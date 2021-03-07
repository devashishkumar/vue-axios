import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers = {
  'Authorization': 'Bearer test token',
  'Content-Type': 'application/json'
};
axios.defaults.timeout = 2000;
axios.defaults.withCredentials = false;
// axios.defaults.proxy = {
//   protocol: 'https',
//   host: '127.0.0.0',
//   port: 1203,
//   auth: {
//     username: 'test',
//     password: 'test'
//   }
// };



createApp(App)
  .use(router)
  .mount("#app");
