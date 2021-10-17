import axiosInst from "../../axiosConfig";
import { IUserProps } from "../../Types/User.type";

export const updateUser = async (user: IUserProps) => {
  return await axiosInst.put(`/users/${user.id}`, user);
};
