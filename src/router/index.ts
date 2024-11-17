import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Login from '../views/Login.vue';
import Animals from '../views/Animals.vue';
import UsefulLinks from '../views/UsefulLinks.vue';
import Faq from '../views/Faq.vue';
import Articles from '../views/Articles.vue';
import Legal from '../views/Legal.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/animals',
    name: 'Animals',
    component: Animals
  },
  {
    path: '/useful-links',
    name: 'Useful Links',
    component: UsefulLinks
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: Faq
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles
  },
  {
    path: '/legal',
    name: 'Legal',
    component: Legal
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
