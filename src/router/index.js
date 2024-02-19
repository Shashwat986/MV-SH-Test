import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BannerCreateView from '../views/BannerCreateView.vue'
import BrowseView from '../views/BrowseView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BrowseView
    },
    {
      path: '/edit/:id',
      redirect: '/'
    },
    {
      path: '/browse',
      name: 'browse',
      component: BrowseView
    },
    {
      path: '/cards',
      name: 'cardhome',
      component: HomeView
    },
    {
      path: '/cards/edit/:id',
      name: 'cardedit',
      component: HomeView
    },
    {
      path: '/banners',
      name: 'bannerhome',
      component: BannerCreateView
    },
    {
      path: '/banners/edit/:id',
      name: 'banneredit',
      component: BannerCreateView
    },
  ]
})

export default router
