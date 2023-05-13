import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getCategory } from '@/api/testAPI.js'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
const app = createApp(App)
getCategory().then(res => {
  console.log(res)
})
app.use(createPinia())
app.use(router)

app.mount('#app')
