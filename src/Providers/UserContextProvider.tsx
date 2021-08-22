import React from "react";
import { useUser } from "../API/Hooks/useUser";
import { FetchError } from "../Components/Shared/FetchError";
import { LoadingSpinner } from "../Components/Shared/LoadingSpinner";
import { UserContext } from "../Context/UserContext";

interface IUserContextProviderProps {
  children: React.ReactNode;
  userId: string;
}

export const UserContextProvider = ({
  children,
  userId,
}: IUserContextProviderProps) => {
  const [status, user] = useUser(userId);

  if (status === "loading") return <LoadingSpinner />;
  if (status === "error") return <FetchError />;

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
