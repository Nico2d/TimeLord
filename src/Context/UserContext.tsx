import { createContext } from "react";
import { UserType } from "../Types/User.type";

const UserContextInit: UserType = {
  username: "Jan Kowalski",
  id: "-1",
  avatar: {
    url: undefined,
  },
  time_lord_projects: [],
  time_lord_user_dailies: [],
};

export const UserContext = createContext<UserType>(UserContextInit);
