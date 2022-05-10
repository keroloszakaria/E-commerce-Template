// import instance from "../../plugin/axios.js";
import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:300/",
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

export default {
  async getStores({ commit }) {
    const res = await instance.get("stores/");
    commit("GET_STORES", res.data);
    return res.data;
  },
};
