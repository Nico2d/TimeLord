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
import { Sidebar } from "../../Sidebar/Sidebar/Sidebar";
import { EditTaskForm } from "../EditTaskForm/EditTaskForm";
import { useSidebarComplementary } from "../../../Hooks/useSidebarComplementary/useSidebarComplementary";
import { UserContext } from "../../../Context/UserContext";
import { useContext } from "react";

export const Task = ({
  task,
  totalTaskTime = 0,
  handleComplete,
  categoryColor,
}: TaskProps) => {
  const { swapSidebarComplementary, closeForm } = useSidebarComplementary();
  const { countToSeconds, secondsToString } = useTime();
  const { pathname } = useLocation();
  const { refetchQueries } = useQueryClient();
  const user = useContext(UserContext);
  const { mutate } = useMutation(updateTask, {
    onSuccess: (data) => {
      console.log("Update task in Task.tsx [Success]:", data);
      refetchQueries(["taskList"], { active: true });
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const isTimerPage = pathname.split("/")[1] === "timer";

  const completeCheckboxHandler = () => {
    const body = { id: task.id, isCompleted: !task.isCompleted };
    mutate(body);

    handleComplete && handleComplete();
  };

  if (!isTimerPage) {
    totalTaskTime = countToSeconds(task.time);
  }

  const taskClickedHandler = () => {
    swapSidebarComplementary(
      <Sidebar position="right" width="300px" onClickAway={closeForm}>
        <EditTaskForm task={task} updateTask={mutate} />
      </Sidebar>
    );
  };

  return (
    <Styled.Container progressBar={totalTaskTime} categoryColor={categoryColor}>
      <Styled.CheckboxWrapper onClick={completeCheckboxHandler}>
        {task.isCompleted ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Styled.CheckboxWrapper>

      <Styled.TextWrapper
        isCompleted={task.isCompleted}
        onClick={taskClickedHandler}
      >
        {task.name}
      </Styled.TextWrapper>

      {task.isCompleted || isTimerPage ? (
        <Styled.TimeCounterWrapper>
          {secondsToString(totalTaskTime)}
        </Styled.TimeCounterWrapper>
      ) : (
        <Styled.PlayWrapper>
          <Link
            to={{ pathname: `/timer/${task.id}`, state: { userId: user.id } }}
          >
            <MdPlayCircleOutline />
          </Link>
        </Styled.PlayWrapper>
      )}
    </Styled.Container>
  );
};
