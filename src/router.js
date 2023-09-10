import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import RouteList from './components/RouteList.vue'
import RoutePartitionList from './components/RoutePartitionList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/RouteList',
    name: 'RouteList',
    component: RouteList
  },
  {
    path: '/RoutePartitionList',
    name: 'RoutePartitionList',
    component: RoutePartitionList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
