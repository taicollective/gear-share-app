import WelcomeLayout from 'layouts/WelcomeLayout.vue'
import HomeLayout from 'layouts/HomeLayout.vue'
import TradeAndDonateLayout from 'layouts/TradeAndDonateLayout.vue'
import InventoryLayout from 'layouts/InventoryLayout.vue'

const routes = [
  {
    path: '/',
    component: WelcomeLayout
  },
  {
    path: '/home',
    component: HomeLayout
  },
  {
    path: '/trade-and-donate',
    component: TradeAndDonateLayout
  },
  {
    path: '/inventory',
    component: InventoryLayout
  }

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue')
  // }
]

export default routes
