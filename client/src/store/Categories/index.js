import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export const state = () => ({
  categories: [],
});

export default {
  namespaced: true,
  state: {},
  getters,
  mutations,
  actions,
};
