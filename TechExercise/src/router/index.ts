import { createRouter, createWebHistory } from 'vue-router'
import SearchPageView from '@/views/SearchPageView.vue'
import CollectionPageView from '@/views/CollectionPageView.vue'
import LoginPage from '@/components/LoginPage.vue'
import SignupPage from '@/components/SignupPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SearchPageView
    },
    {
      path: '/collection',
      name: 'collection',
      component: CollectionPageView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage
    },
    // {
      // path: '/collection/results',
      // name: 'collectionResults',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import('../views/CollectionResultsView.vue')
    // }
  ]
})

export default router
