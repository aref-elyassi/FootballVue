import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Players from '@/views/Players.vue'
import Teams from '@/views/Teams.vue'
import Leagues from '@/views/Leagues.vue'

const routes = [
{path:'/',name:'Home',component:Home},
{path:'/players',name:'Players',component:Players},
{path:'/teams',name:'Teams',component:Teams},
{path:'/leagues',name:'Leagues',component:Leagues}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
