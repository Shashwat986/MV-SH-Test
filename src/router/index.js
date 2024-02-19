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
      component: HomeView
    },
    {
      path: '/browse',
      name: 'browse',
      component: BrowseView
    },
    {
      path: '/edit/:id',
      name: 'edit',
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
