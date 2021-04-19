import homePage from '../pages/Home.vue'
import developersPage from '../pages/Developers.vue'
import xrpLedgerPage from '../pages/XrpLedger.vue'
import faqPage from '../pages/FAQ.vue'
import notFoundPage from '../pages/NotFound.vue'

import { DOMAIN_TITLE } from '../.env'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage,
    meta: {
      title: `${DOMAIN_TITLE}`,
      layout: 'app'
    }
  },
  {
    path: '/developers',
    name: 'developers',
    component: developersPage,
    meta: {
      title: `${DOMAIN_TITLE} | Developers`,
      layout: 'app'
    }
  },
  {
    path: '/xrp-ledger',
    name: 'xrpledger',
    component: xrpLedgerPage,
    meta: {
      title: `${DOMAIN_TITLE} | XRP Ledger`,
      layout: 'app'
    }
  },
  {
    path: '/faq',
    name: 'faq',
    component: faqPage,
    meta: {
      title: `${DOMAIN_TITLE} | FAQ`,
      layout: 'app'
    }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  }
]
