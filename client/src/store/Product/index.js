import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export const state = () => ({
  product: [],
});

export default {
  namespaced: true,
  state: {},
  getters,
  mutations,
  actions,
};
