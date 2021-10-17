import { useMutation, useQueryClient } from "react-query";
import { updateUser } from "../Endpoints/updateUser";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation(updateUser, {
    onSuccess: (data) => {
      console.log("Update task [Success]:", data);
      queryClient.refetchQueries("user", { active: true });
    },
    onError: () => {
      alert("there was an error");
    },
  });

  return mutate;
};
