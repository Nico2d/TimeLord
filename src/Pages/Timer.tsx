import { RouteComponentProps, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchTask } from "../API/fetchTask";
import { TimerController } from "../Components/Timer/TimerContainer";
import { LoadingSpinner } from "../Components/Shared/LoadingSpinner";
import { FetchError } from "../Components/Shared/FetchError";

type TParams = { userId: string };

export const Timer = (props: RouteComponentProps<any, any, TParams>) => {
  const params: {
    taskId: string;
  } = useParams();
  const routerState = props.location.state;

  const {
    data: task,
    error,
    isLoading,
  } = useQuery(["task", params.taskId], fetchTask);

  if (error) return <FetchError />;
  if (isLoading) return <LoadingSpinner />;

  return <TimerController task={task} userID={routerState.userId} />;
};
