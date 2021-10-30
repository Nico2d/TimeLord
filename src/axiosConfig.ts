import axios from "axios";
import { API_URL } from "./constants";

const instance = axios.create({
  baseURL: `${API_URL}`,
});

instance.interceptors.request.use(
  function (config) {
    let token = localStorage.getItem("token");
    token = token?.substring(1).slice(0, -1) || null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const inst = error.response.data;

    return Promise.reject(inst.message[0].messages[0] ?? error.response.data);
  }
);

export default instance;
