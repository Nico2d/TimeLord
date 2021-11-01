import { useQueryClient, useMutation } from "react-query";
import styled from "styled-components";
import { updateTask } from "../../API/updateTask";
import { useTime } from "../../Hooks/useTime";
import { TaskType } from "../../Types/Task.type";
import { slugify } from "../../Utils/slugify";
import { Backward } from "./Backward";
import { CountdownContainer } from "./Countdown/CountdownContainer";
import { TaskDisplay } from "./TaskDisplay";

type TimeControllerProps = {
  task: TaskType;
};

export const TimerController = ({ task }: TimeControllerProps) => {
  const { countToSeconds, secondsToString } = useTime();
  const queryClient = useQueryClient();

  //dwu ktornie wywyłuje się PUT - WHY????
  const { mutate } = useMutation(updateTask, {
    mutationKey: "updateTask",
    onMutate: () => {
      console.log("onMutate");
    },

    onSuccess: (data) => {
      console.log("Update task [Success]:", data);
      queryClient.refetchQueries("daily");
      queryClient.invalidateQueries(["task", task.id.toString()]);
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const onFinishHandleUpdateTime = (addedTime: number) => {
    const body = { ...task, time: secondsToString(addedTime) };

    console.log("onFinishHandleUpdateTime... init Mutate");
    mutate(body);
  };

  let projectName = "/";
  if (typeof task.time_lord_project === "object") {
    projectName = task.time_lord_project.name;
  }

  return (
    <Container>
      <Backward text={projectName} to={`/projects/${slugify(projectName)}`} />
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
