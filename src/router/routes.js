import WelcomeLayout from 'layouts/WelcomeLayout.vue'

const routes = [
  {
    path: '/',
    component: WelcomeLayout
  }

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue')
  // }
]

export default routes
