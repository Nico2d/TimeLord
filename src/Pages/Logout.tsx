import { useSignOutUser } from "../Hooks/useSignOutUser/useSignOutUser";

export const Logout = () => {
  const [signOutUser] = useSignOutUser();
  signOutUser();

  return null;
};
