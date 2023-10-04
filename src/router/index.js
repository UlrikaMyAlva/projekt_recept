import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      geh
        path: '/category/:categoryId', // task 2.3.1
      name: 'category',
      component: () => import('../views/CategoryView.vue')
    },
    ,
    {
      path: '/recipe/:recipeId', // task 2.3.2
      name: 'recipe',
      component: () => import('../views/RecipeView.vue')
    }
  ]
})

export default router
