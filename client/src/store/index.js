import Vue from "vue";
import Vuex from "vuex";
import productModule from "./Product";
import categoriesModule from "./Categories";
import cartModule from "./Cart";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    productModule,
    categoriesModule,
    cartModule,
  },
});

export default store;
