import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import CreateUserView from '../views/CreateUserView.vue'
import BookView from '../views/BookView.vue'
import CreateBookView from '../views/CreateBookView.vue'
import BookCheckoutView from '../views/BookCheckoutView.vue'
import CreateBookCheckoutView from '../views/CreateBookCheckoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: UserView
    },
    {
      path: '/users/create',
      name: 'create-users',
      component: CreateUserView
    },
    {
      path: '/books',
      name: 'books',
      component: BookView
    },
    {
      path: '/books/create',
      name: 'create-books',
      component: CreateBookView
    },

    {
      path: '/bookcheckouts',
      name: 'bookcheckouts',
      component: BookCheckoutView
    },
    {
      path: '/bookcheckouts/create',
      name: 'create-bookcheckouts',
      component: CreateBookCheckoutView
    },
  ]
})

export default router
