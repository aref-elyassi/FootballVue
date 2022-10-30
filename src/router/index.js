import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Players from '@/views/Players.vue'
import Teams from '@/views/Teams.vue'
import Leagues from '@/views/Leagues/Leagues.vue'
import Login from '@/views/Login.vue'
import TemplateLeagues from '@/views/Leagues/TemplateLeagues.vue'
import IndexLeagues from '@/views/Leagues/IndexLeagues.vue'
const routes = [
{path:'/',name:'Home',component:Home},
{path:'/players',name:'Players',component:Players},
{path:'/teams',name:'Teams',component:Teams},
{path:'/leagues',name:'TemplateLeagues',component:TemplateLeagues,children:[
  {path:'',name:'Leagues',component:Leagues},
  {path:':name',name:'leagueId',component:IndexLeagues}
]},

{path:'/login',name:'Login',component:Login}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
