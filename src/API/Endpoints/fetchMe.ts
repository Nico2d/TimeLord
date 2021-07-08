import instanceAxios from "../../axiosConfig";
import { UserType } from "../../Types/User.type";

export const fetchMe = async () => {
  const res = await instanceAxios.get<UserType>(`/users/me`);

  return res;
};
