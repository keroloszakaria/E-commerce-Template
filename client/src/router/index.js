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
