import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import UpcomingEvents from '../views/UpcomingEvents.vue'
import CanceledEvents from '../views/CanceledEvents.vue'
import Categories from '../views/Categories.vue'
import Nightlife from '../views/Categories/Nightlife.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/Login',
    name:'Login',
    component:Login
  },
  {
    path:'/Signup',
    name:'Signup',
    component:Signup
  },
  {
    path:'/UpcomingEvents',
    name:'UpcomingEvents',
    component:UpcomingEvents
  },
  {
    path:'/CanceledEvents',
    name:'CanceledEvents',
    component:CanceledEvents
  },
  {
    path:'/Categories',
    name:'Categories',
    component:Categories
  },
  {
    path:'/Nightlife',
    name:'Nightlife',
    component:Nightlife
  },
  {
    path:'/:id',
    name:'popup',
    props:true,
    component:()=>import(/* webpackChunkName: "popup" */ '../components/Popup.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
