import { useQueryClient, useMutation } from "react-query";
import styled from "styled-components";
import { useUpdateUser } from "../../API/Hooks/useUpdateUser";
import { updateTask } from "../../API/updateTask";
import { useTime } from "../../Hooks/useTime";
import { TaskType } from "../../Types/Task.type";
import { Backward } from "./Backward";
import { CountdownContainer } from "./Countdown/CountdownContainer";
import { TaskDisplay } from "./TaskDisplay";

type TimeControllerProps = {
  task: TaskType;
  userID?: string;
};

export const TimerController = ({ task, userID }: TimeControllerProps) => {
  const { countToSeconds, secondsToString } = useTime();
  const queryClient = useQueryClient();
  const updateUser = useUpdateUser();
  const { mutate } = useMutation(updateTask, {
    onSuccess: (data) => {
      console.log("Update task [Success]:", data);

      queryClient.invalidateQueries(["task", task.id]);
      queryClient.refetchQueries(["task", task.id]);
    },
    onError: () => {
      alert("there was an error");
    },
  });
  // const {mutate} = useMutation(updateU)

  const onFinishHandleUpdateTime = (addedTime: number) => {
    let body = { ...task, time: secondsToString(addedTime) };

    // console.log("User finished task", userID);

    // userID &&
    //   updateUser.mutate({ id: userID, time_lord_user_dailies: [{ id: }] });
    mutate(body);
  };

  let projectName = "/";
  if (typeof task.time_lord_project === "object") {
    projectName = task.time_lord_project.name;
  }

  return (
    <Container>
      <Backward projectName={projectName} />
      <TaskDisplay task={task} />

      <CountdownContainer
        onFinishHandleUpdateTime={onFinishHandleUpdateTime}
        startTime={countToSeconds(task.time)}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: white;
  padding-bottom: 5rem;
`;
