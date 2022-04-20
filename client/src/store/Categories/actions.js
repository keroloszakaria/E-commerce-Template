import instance from "../../plugin/axios.js";

export default {
  async getCategories({ commit }) {
    const res = await instance.get("products/categories/");
    commit("GET_CATEGORIES", res.data);
    // return res.data.slice(0, 7);
    return res.data.slice(0, 11);
  },
};
