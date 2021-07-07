import { useMutation } from "react-query";
import { createUser } from "../Endpoints/createUser";

export const useCreateUser = () => {
  const mutate = useMutation(createUser, {
    onSuccess: (data) => {
      console.log("Register us er [Success]:", data);
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {},
  });

  return [mutate];
};
