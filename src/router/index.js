import Vue from 'vue'
import VueRouter from 'vue-router'
import echarts from '../components/Myecharts.vue'
import todolist from '../components/Mytodolist.vue'
Vue.use(VueRouter)

const routes = [
  {
     path: '/',
   
  },
  {
    path: '/Myecharts',
    name: 'Myecharts',
    component: echarts
    
  },
  {
    path: '/Mytodolist',
    name: 'Mytodolist',
    component: todolist
   
  },
]
  const router = new VueRouter({
    routes
  })
  
  export default router