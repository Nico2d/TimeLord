import instanceAxios from "../../axiosConfig";
import { UserType } from "../../Types/User.type";

export const fetchUser = async (userID: string | number) => {
  const res = await instanceAxios.get<UserType>(`/users/${userID}`);

  return res;
};
