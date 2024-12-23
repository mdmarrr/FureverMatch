import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import Animals from '../views/Animals.vue';
import AnimalDetail from '../views/AnimalDetail.vue';
import Favourites from '../views/Favourites.vue';
import Contact from '../views/Contact.vue';
import Faq from '../views/Faq.vue';
import Articles from '../views/Articles.vue';
import Legal from '../views/Legal.vue';
import Filters from '../views/Filters.vue';
import VisitForm from '../views/VisitForm.vue';
import AdoptForm from '../views/AdoptForm.vue';

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
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/animals',
    name: 'Animals',
    component: Animals
  },
  {
    path: '/animals/:id',
    name: 'AnimalDetail',
    component: AnimalDetail,
    props: true
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: Favourites
  },
  {
    path: '/filters',
    name: 'Filters',
    component: Filters
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
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
  },
  {
    path: '/visit-form',
    name: 'Visit Form',
    component: VisitForm
  },
  {
    path: '/adopt-form',
    name: 'Adopt Form',
    component: AdoptForm
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
