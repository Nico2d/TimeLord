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
    history.push(session.redirectPath);
  };

  const mutate = useMutation(signInUser, {
    onSuccess: (data) => {
      console.log("SignIn user [Success]:", data);

      setValue(data.data.jwt);
      handleLogin();
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {},
  });

  return [mutate];
};
