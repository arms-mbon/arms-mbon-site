import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import cors from 'cors'

createApp(App).use(VueAxios, axios).use(store).use(router).use(cors).mount('#app')
