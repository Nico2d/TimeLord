// First we need to import axios.js
import axios from "axios";
import { API_URL } from "./constants";
// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  baseURL: `${API_URL}`,
});

// const [value] = useLocalStorage("token");
// Where you would set stuff like your 'Authorization' header, etc ...
let token: string = localStorage.getItem("token") ?? "";
token = token.substring(1).slice(0, -1);

instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// Also add/ configure interceptors && all the other cool stuff

// instance.interceptors.request...

export default instance;
