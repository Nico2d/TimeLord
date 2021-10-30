import { useMutation } from "react-query";
import { RegisterType } from "../../Pages/Register";
import { createUser } from "../Endpoints/createUser";

export const useCreateUser = () => {
  return useMutation<any, Error, RegisterType>(createUser);
};
