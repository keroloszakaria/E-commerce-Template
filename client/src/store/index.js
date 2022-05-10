import Vue from "vue";
import Vuex from "vuex";
import productModule from "./Product";
import categoriesModule from "./Categories";
import cartModule from "./Cart";
import personalModule from "./PersonalData";
import GiftCardsModule from "./GiftCards";
import StoresModule from "./Stores";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    productModule,
    categoriesModule,
    cartModule,
    personalModule,
    GiftCardsModule,
    StoresModule,
  },
});

export default store;
