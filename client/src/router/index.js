import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: function () {
      return import("../views/Home.vue");
    },
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "About",
    component: function () {
      return import("../views/About.vue");
    },
    meta: {
      title: "About",
    },
  },

  {
    path: "/ProductFilter/:category",
    name: "ProductFilter",
    component: function () {
      return import("../views/ProductFilter.vue");
    },
    meta: {
      title: "ProductFilter",
    },
  },
  {
    path: "/ProductView/:id",
    name: "ProductView",
    component: function () {
      return import("../views/ProductView.vue");
    },
    meta: {
      title: "ProductView",
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: function () {
      return import("../views/Cart.vue");
    },
    meta: {
      title: "Cart",
    },
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: function () {
      return import("../views/Checkout.vue");
    },
    meta: {
      title: "Checkout",
    },
  },

  // Footer Links
  {
    path: "/return",
    name: "Return",
    component: function () {
      return import("../views/ReturnView.vue");
    },
    meta: {
      title: "Return",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: function () {
      return import("../views/ContactView.vue");
    },
    meta: {
      title: "Contact",
    },
  },
  {
    path: "/shipping",
    name: "Shipping",
    component: function () {
      return import("../views/ShippingView.vue");
    },
    meta: {
      title: "Shipping",
    },
  },
  {
    path: "/find-store",
    name: "Store",
    component: function () {
      return import("../views/StoresView.vue");
    },
    meta: {
      title: "Find a Store",
    },
  },
  {
    path: "/gift-card",
    name: "GiftCard",
    component: function () {
      return import("../views/GiftCards.vue");
    },
    meta: {
      title: "Gift Cards",
    },
  },
  {
    path: "/payment-options",
    name: "PaymentOptions",
    component: function () {
      return import("../views/PaymentOptions.vue");
    },
    meta: {
      title: "Payment Options",
    },
  },
  {
    path: "/*",
    name: "NotFound",
    component: function () {
      return import("../views/NotFound.vue");
    },
    meta: {
      title: "NotFound",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  //base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} | Lorem` : "Lorem";

  next();
});

export default router;
