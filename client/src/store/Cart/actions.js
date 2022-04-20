import instance from "../../plugin/axios.js";
import axios from "axios";

export default {
  // async addToCart({ commit }, payload) {
  //   const res = await axios.post("  http://localhost:300/cart/");
  //   // .catch((err) => {
  //   //   alert("Match has already started");
  //   //   return Promise.reject(err.response);
  //   // });
  //   console.log(res.data);
  //   // commit("ADD_TO_CART", payload);
  //   // return res.data;
  // },

  async addProductToCart({ commit }, data) {
    const res = await instance
      .post("cart/add", (data = data))

      .catch((error) => {
        alert("error");
        // return Promise.reject(error.response);
      });
    commit("ADD_TO_CART", data);
  },

  async getCartLength({ commit }) {
    const res = await instance.get("carts/1");
    commit("GET_CART", res.data.products);
    return res.data.products.length;
  },
  async getCart({ commit }) {
    const res = await instance.get("carts/1");
    commit("GET_CART", res.data.products);
    return res.data.products;
  },

  // async addProductToCart({ commit }, payload) {
  //   if (payload.stock > 0) {
  //     const cartItem =

  //   }
  //   // const res = await instance.post("carts/addProduct", payload);
  //   // if (!cartItem) {
  // },

  //
  //
  //
  // async addCartItem({ commit }, cartItem) {
  //   const res = await instance.post("/api/cart", cartItem);
  //   commit("GET_CART", res.data);
  //   return res.data;
  // },
  // async removeCartItem({ commit }, cartItem) {
  //   const res = await instance.delete("/carts/1", cartItem);
  //   commit("GET_CART", res.data);
  //   console.log(res.data);
  //   return res.data;
  // },
};
