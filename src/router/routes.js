import WelcomeLayout from "layouts/WelcomeLayout.vue";
import HomePage from "pages/HomePage.vue";
import PartnerWithUs from "pages/PartnerWithUs.vue";
import Donate from "pages/Donate.vue";

import InventoryLayout from 'layouts/InventoryLayout.vue'
import InventoryPage from 'pages/InventoryPage.vue'
import AddGearItem from 'pages/AddGearItem.vue'
import TradeAndDonateLayout from 'src/layouts/TradeAndDonateLayout.vue'
import RentingLayout from "src/layouts/RentingLayout.vue";

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
    path: '/trade-and-donate',
    component: TradeAndDonateLayout
  },
  {
    path: '/renting',
    component: RentingLayout
  },
  {
    path: "/partner-with-us",
    component: PartnerWithUs,
  },
  {
    path: "/donate",
    component: Donate,
    props: (route) => ({ type: route.query.type }),
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
