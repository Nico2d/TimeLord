import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdPlayCircleOutline,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useTime } from "../../../Hooks/useTime";
import { useMutation, useQueryClient } from "react-query";
import { updateTask } from "../../../API/updateTask";
import * as Styled from "./Task.styles";
import { TaskProps } from "./Task.types";

export const Task = ({
  task,
  totalTaskTime = 0,
  handleComplete,
  categoryColor,
}: TaskProps) => {
  const location = useLocation();
  const isTimerPage = location.pathname.split("/")[1] === "timer";
  const [countToSeconds, secondsToString] = useTime("");

  const queryClient = useQueryClient();
  const { mutate } = useMutation(updateTask, {
    onSuccess: (data) => {
      console.log("Update task [Success]:", data);
      queryClient.refetchQueries(["taskList"], { active: true });
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const clickHandler = () => {
    const body = { id: task.id, isCompleted: !task.isCompleted };
    mutate(body);

    if (handleComplete) handleComplete();
  };

  if (!isTimerPage) {
    totalTaskTime = countToSeconds(task.time);
  }

  return (
    <Styled.Container progressBar={totalTaskTime} categoryColor={categoryColor}>
      <Styled.CheckboxWrapper onClick={clickHandler}>
        {task.isCompleted ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Styled.CheckboxWrapper>
      <Styled.TextWrapper isCompleted={task.isCompleted}>
        {task.name}
      </Styled.TextWrapper>

      {task.isCompleted || isTimerPage ? (
        <Styled.TimeCounterWrapper>
          {secondsToString(totalTaskTime)}
        </Styled.TimeCounterWrapper>
      ) : (
        <Styled.PlayWrapper>
          <Link to={`/timer/${task.id}`}>
            <MdPlayCircleOutline />
          </Link>
        </Styled.PlayWrapper>
      )}
    </Styled.Container>
  );
};
