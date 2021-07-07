import axios from "axios";
import { API_URL } from "../../constants";
import { RegisterType } from "../../Pages/Register";

export const createUser = async (submitData: RegisterType) => {
  const res = axios.post(`${API_URL}/auth/local/register`, submitData);

  // .then((response) => {
  //   console.log("Well done!");
  //   console.log("User profile", response.data.user);
  //   console.log("User token", response.data.jwt);
  // })
  // .catch((error) => {
  //   console.log("An error occurred:", error.response);
  // });

  return res; 
};
