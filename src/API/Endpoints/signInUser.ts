import { signInModel } from "../Models/signIn.model";
import axiosInst from "../../axiosConfig";

export const signInUser = async (body: signInModel) => {
  return await axiosInst.post(`/auth/local`, body);
};
