// import instance from "../../plugin/axios.js";
import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:300/",
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

export default {
  async getCards({ commit }) {
    const res = await instance.get("gifts/");
    commit("GET_CARDS", res.data);
    return res.data;
  },
};
