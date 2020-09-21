import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import UpcomingEvents from '../views/UpcomingEvents.vue'
import PastEvents from '../views/PastEvents.vue'
import Categories from '../views/Categories.vue'
import Aquarium from '../views/Categories/Aquarium.vue'
import Outdoor from '../views/Categories/Outdoor.vue'
import Entertainment from '../views/Categories/Entertainment.vue'
import Music from '../views/Categories/Music.vue'
import Restaurant from '../views/Categories/Restaurant.vue'
import Museum from '../views/Categories/Museum.vue'
import FreeEvents from '../views/FreeEvents.vue'
Vue.use(VueRouter)

const routes = [{
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
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/UpcomingEvents',
        name: 'UpcomingEvents',
        component: UpcomingEvents
    },
    {
        path: '/PastEvents',
        name: 'PastEvents',
        component: PastEvents
    },
    {
        path: '/Categories',
        name: 'Categories',
        component: Categories
    },
    {
        path: '/Aquarium',
        name: 'Aquarium',
        component: Aquarium
    },
    {
        path: '/Outdoor',
        name: 'Outdoor',
        component: Outdoor
    },
    {
        path: '/Entertainment',
        name: 'Entertainment',
        component: Entertainment
    },
    {
        path: '/Music',
        name: 'Music',
        component: Music
    },
    {
        path: '/Restaurant',
        name: 'Restaurant',
        component: Restaurant
    },
    {
        path: '/Museum',
        name: 'Museum',
        component: Museum
    },
    {
        path: '/FreeEvents',
        name: 'FreeEvents',
        component: FreeEvents
    },
    {
        path: '/:id',
        name: 'popup',
        props: true,
        component: () =>
            import ( /* webpackChunkName: "popup" */ '../components/Popup.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router