import { useMutation, useQueryClient } from "react-query";
import { mutateProject } from "../Endpoints/mutateProject";

export const useProjectList = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation(mutateProject, {
    onSuccess: (data) => {
      console.log("Adding new project [Success]:", data);
      queryClient.refetchQueries("user");
    },
    onError: () => {
      alert("there was an error");
    },
  });

  return [mutate];
};
