import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import ColumnDetail from './views/ColumnDetail.vue'
import createMesssage from './funcComponents/Message/Message.js'
// const createMesssage = require('./funcComponents/Message/Message.js')
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/columndetail/:id',
    name: 'columnDetail',
    component: ColumnDetail
  }]
})
const app = createApp(App)
app.config.globalProperties.$Message = createMesssage
app.use(router)
app.mount('#app')
