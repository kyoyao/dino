import { createApp } from 'vue'
//import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import $config from './assets/js/config';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import JQuery from "jquery/dist/jquery.min.js"
import axios from 'axios'

window.$config = $config;
window.axios = axios;
window.$ = JQuery;

const app = createApp(App)

//app.use(createPinia())
app.use(router)

app.mount('#app')
