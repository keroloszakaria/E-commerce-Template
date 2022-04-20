import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

export default instance;
