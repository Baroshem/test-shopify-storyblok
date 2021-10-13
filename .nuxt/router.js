import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _380e41d0 = () => interopDefault(import('../pages/Category.vue' /* webpackChunkName: "pages/Category" */))
const _21c00b60 = () => interopDefault(import('../pages/Checkout.vue' /* webpackChunkName: "" */))
const _d28396a8 = () => interopDefault(import('../pages/Checkout/Billing.vue' /* webpackChunkName: "" */))
const _356d86b7 = () => interopDefault(import('../pages/Checkout/Payment.vue' /* webpackChunkName: "" */))
const _fe7ad166 = () => interopDefault(import('../pages/Checkout/Shipping.vue' /* webpackChunkName: "" */))
const _6a5062f4 = () => interopDefault(import('../pages/Checkout/ThankYou.vue' /* webpackChunkName: "" */))
const _9ca72798 = () => interopDefault(import('../pages/ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _20ddcf79 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "" */))
const _515ba6b7 = () => interopDefault(import('../pages/MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _3e7c5e27 = () => interopDefault(import('../pages/MyAccount/AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _de0cf222 = () => interopDefault(import('../pages/MyAccount/BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _d5e24d04 = () => interopDefault(import('../pages/MyAccount/LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _68aa2c2d = () => interopDefault(import('../pages/MyAccount/MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _5744b836 = () => interopDefault(import('../pages/MyAccount/MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _1be08557 = () => interopDefault(import('../pages/MyAccount/MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _43ef4d8e = () => interopDefault(import('../pages/MyAccount/OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _3e12bebc = () => interopDefault(import('../pages/MyAccount/ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _f7750d76 = () => interopDefault(import('../pages/Product.vue' /* webpackChunkName: "pages/Product" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _380e41d0,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _21c00b60,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _d28396a8,
      name: "billing___en"
    }, {
      path: "payment",
      component: _356d86b7,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _fe7ad166,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _6a5062f4,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _21c00b60,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _d28396a8,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _356d86b7,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _fe7ad166,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _6a5062f4,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _9ca72798,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _20ddcf79,
    name: "home___de"
  }, {
    path: "/Home",
    component: _20ddcf79,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _515ba6b7,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _3e7c5e27,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _de0cf222,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _d5e24d04,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _68aa2c2d,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _5744b836,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _1be08557,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _43ef4d8e,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _3e12bebc,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _f7750d76,
    name: "Product___en"
  }, {
    path: "/de/Category",
    component: _380e41d0,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _21c00b60,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _d28396a8,
      name: "billing___de"
    }, {
      path: "payment",
      component: _356d86b7,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _fe7ad166,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _6a5062f4,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _21c00b60,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _d28396a8,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _356d86b7,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _fe7ad166,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _6a5062f4,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _9ca72798,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _20ddcf79,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _515ba6b7,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _3e7c5e27,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _de0cf222,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _d5e24d04,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _68aa2c2d,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _5744b836,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _1be08557,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _43ef4d8e,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _3e12bebc,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _f7750d76,
    name: "Product___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _515ba6b7,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _f7750d76,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _380e41d0,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _515ba6b7,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _f7750d76,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _380e41d0,
    name: "category___en"
  }, {
    path: "/",
    component: _20ddcf79,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
