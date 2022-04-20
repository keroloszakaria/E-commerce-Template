export default {
  ADD_TO_CART(state, value) {
    state.cart.push(value);
  },
  GET_CART(state, product) {
    state.cart = product;
  },
};
