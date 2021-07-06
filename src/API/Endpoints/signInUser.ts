import axios from "axios";
import { API_URL } from "../../constants";
import { SignInProps } from "../../Pages/LoginPage";

export const signInUser = async (body: SignInProps) => {
  const res = await axios.post(`${API_URL}/auth/local`, body);

  return res;
};
