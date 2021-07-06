import { useMutation } from "react-query";
import { signInUser } from "../../API/Endpoints/signInUser";
import { useLocalStorage } from "react-use";

export const useSignInUser = () => {
  const [, setValue] = useLocalStorage("token", "");

  const mutate = useMutation(signInUser, {
    onSuccess: (data) => {
      console.log("SignIn user [Success]:", data);

      setValue(data.data.jwt);
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {},
  });

  return [mutate];
};
