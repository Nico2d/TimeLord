import { useMutation, useQueryClient } from "react-query";
import { deleteTask } from "../Endpoints/deleteTask";

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation(deleteTask, {
    onSuccess: (data) => {
      console.log("Deleted [Success]:", data);
      queryClient.refetchQueries(["taskList"], { active: true });
    },
    onError: () => {
      alert("there was an error");
    },
  });

  return mutate;
};
