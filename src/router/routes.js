import WelcomeLayout from 'layouts/WelcomeLayout.vue'
import HomeLayout from 'layouts/HomeLayout.vue'

const routes = [
  {
    path: '/',
    component: WelcomeLayout
  },
  {
    path: '/home',
    component: HomeLayout
  }

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue')
  // }
]

export default routes
