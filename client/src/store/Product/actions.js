import instance from "../../plugin/axios.js";

export default {
  async getProducts({ commit }) {
    const res = await instance.get("products/");
    commit("GET_PRODUCT", res.data.products);
    return res.data.products;
  },
  async getSingleProduct({ commit }, id) {
    const res = await instance.get(`products/${id}/`);
    commit("GET_PRODUCT", res.data);
    return res.data;
  },

  async getProductByCategory({ commit }, category) {
    const res = await instance.get(`/products/category/${category}`);
    commit("GET_PRODUCT", res.data.products);
    return res.data.products;
  },
};
