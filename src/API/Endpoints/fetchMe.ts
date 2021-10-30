import instanceAxios from "../../axiosConfig";
import { UserType } from "../../Types/User.type";

export const fetchMe = async () => {
  return await instanceAxios.get<UserType>(`/users/me`);
};
