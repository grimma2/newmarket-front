import {createRouter, createWebHistory} from 'vue-router'
import ProductsPage from "@/views/ProductsView";
import Home from '@/views/HomePage'
import LoginPage from "@/views/authViews/LoginPage";
import RegisterPage from "@/views/authViews/RegisterPage";
import ProductPage from "@/views/ProductPage.vue";
import FavoritesPage from "@/views/FavoritesPage.vue";
import CartPage from "@/views/CartPage.vue";


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/products/',
    component: ProductsPage
  },
  {
    path: '/login/',
    component: LoginPage
  },
  {
    path: '/register/',
    component: RegisterPage
  },
  {
    path: '/products/:slug/',
    component: ProductPage
  },
  {
    path: '/cart/',
    component: CartPage,
  },
  {
    path: '/favorites/',
    component: FavoritesPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
