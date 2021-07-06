import { useHistory } from "react-router-dom";
import { useLocalStorage } from "react-use";

export const useSignOutUser = () => {
  const history = useHistory();
  const [, , remove] = useLocalStorage("token");

  const SignOutUser = () => {
    console.log("Wylogowanie...");
    history.push("/");
    remove();
  };

  return [SignOutUser];
};
