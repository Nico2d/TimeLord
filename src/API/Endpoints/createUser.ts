import { RegisterType } from "../../Pages/Register";
import axiosInst from "../../axiosConfig";

interface UserType {
  user: {};
  jwt: string;
}

export const createUser = async (submitData: RegisterType) => {
  return await axiosInst.post<UserType>(`/auth/local/register`, submitData);
};
