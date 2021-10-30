import { useMutation } from "react-query";
import { signInUser } from "../../API/Endpoints/signInUser";
import { useLocalStorage } from "react-use";
import { useHistory } from "react-router-dom";
import { useSessionContext } from "../../Context/SessionContext";

export const useSignInUser = () => {
  const [, setValue] = useLocalStorage("token", "");
  const [session, setSession] = useSessionContext();
  const history = useHistory();

  const handleLogin = () => {
    setSession({ ...session, isAuthenticated: true });
    history.push("/dashboard");
  };

  const mutate = useMutation<any, any, any>(signInUser, {
    onSuccess: (data) => {
      setValue(data.data.jwt);
      handleLogin();
    },
  });

  return mutate;
};
