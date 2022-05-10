import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export const state = () => ({
  stores: [],
});

export default { namespaced: true, state, actions, getters, mutations };
