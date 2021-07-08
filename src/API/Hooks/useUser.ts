import { useQuery } from "react-query";
import { UserType } from "../../Types/User.type";
import { fetchMe } from "../Endpoints/fetchMe";
import { fetchUser } from "../Endpoints/fetchUser";

export const useUser = (id?: string): [string, UserType] => {
  const { status, data } = useQuery(
    "user",
    id ? () => fetchUser(id) : fetchMe,
    {
      refetchOnWindowFocus: false,
    }
  );

  const user = data?.data ?? ({} as UserType);

  return [status, user];
};
