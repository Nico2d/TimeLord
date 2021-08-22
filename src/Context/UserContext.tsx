import { createContext } from "react";
import { UserType } from "../Types/User.type";

const UserContextInit = {
  username: "Jan Kowalski",
  id: "-1",
  avatar: {
    url: undefined,
  },
  time_lord_projects: [],
};

export const UserContext = createContext<UserType>(UserContextInit);
