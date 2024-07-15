import WelcomeLayout from 'layouts/WelcomeLayout.vue'
import HomePage from 'pages/HomePage.vue'

import InventoryLayout from 'layouts/InventoryLayout.vue'
import InventoryPage from 'pages/InventoryPage.vue'
import AddGearItem from 'pages/AddGearItem.vue'

const routes = [
  {
    path: '/',
    component: WelcomeLayout
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/trade-and-donate'
    // component: TradeAndDonatePage
  },
  {
    path: '/inventory',
    component: InventoryLayout,
    children: [
      {
        path: '',
        component: InventoryPage
      },
      {
        path: '/add',
        component: AddGearItem
      }
    ]
  }

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue')
  // }
]

export default routes
