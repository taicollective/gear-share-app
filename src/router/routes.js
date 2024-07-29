import WelcomeLayout from "layouts/WelcomeLayout.vue";
import HomePage from "pages/HomePage.vue";

import InventoryLayout from "layouts/InventoryLayout.vue";
import InventoryPage from "pages/InventoryPage.vue";
import AddGearItem from "pages/AddGearItem.vue";
import ItemSelectLayout from "src/layouts/ItemSelectLayout.vue";
import ItemSelectPage from "pages/ItemSelectPage.vue";

const routes = [
  {
    path: "/",
    component: WelcomeLayout,
  },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/trade-and-donate",
    component: ItemSelectLayout,
    children: [
      {
        path: "",
        component: ItemSelectPage,
      },
    ],
  },
  {
    path: "/inventory",
    component: InventoryLayout,
    children: [
      {
        path: "",
        component: InventoryPage,
      },
      {
        path: "/add",
        component: AddGearItem,
      },
      {
        path: "/edit",
        component: AddGearItem,
        props: (route) => ({ gearInfoProp: route.query.gearInfoProp }),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue')
  // }
];

export default routes;
