import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchTask } from "../API/fetchTask";
import { TimerController } from "../Components/Timer/TimerContainer";
import { LoadingSpinner } from "../Components/Shared/LoadingSpinner";
import { FetchError } from "../Components/Shared/FetchError";

export const Timer = () => {
  const params: {
    taskId: string;
  } = useParams();

  const {
    data: task,
    error,
    isLoading,
  } = useQuery(["task", params.taskId], fetchTask);

  if (error) return <FetchError />;
  if (isLoading) return <LoadingSpinner />;

  return <TimerController task={task} />;
};
