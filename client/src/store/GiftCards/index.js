import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export const state = () => ({
  cards: [],
});

export default { namespaced: true, state, actions, getters, mutations };
