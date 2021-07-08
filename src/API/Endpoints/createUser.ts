import axios from "axios";
import { API_URL } from "../../constants";
import { RegisterType } from "../../Pages/Register";

interface UserType {
  user: {};
  jwt: string;
}

export const createUser = async (submitData: RegisterType) => {
  const res = axios.post<UserType>(
    `${API_URL}/auth/local/register`,
    submitData
  );

  return res;
};
