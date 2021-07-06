import React from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdPlayCircleOutline,
} from "react-icons/md";
import styled from "styled-components";
import { TaskType } from "../../Types/Task.type";
import { Link, useLocation } from "react-router-dom";
import { getDualDigital } from "../../Utils/getDualDigital";
import { useTime } from "../../Hooks/useTime";
import { useMutation, useQueryClient } from "react-query";
import { updateTask } from "../../API/updateTask";

type TaskProps = {
  task: TaskType;
  totalTaskTime?: number;
  handleComplete?: () => void;
};

export const Task = ({
  task,
  totalTaskTime = 0,
  handleComplete,
}: TaskProps) => {
  const location = useLocation();
  const isTimerPage = location.pathname.split("/")[1] === "timer";
  const [countToSeconds] = useTime("");

  const queryClient = useQueryClient();
  const { mutate } = useMutation(updateTask, {
    onSuccess: (data) => {
      console.log("Update task [Success]:", data);
      queryClient.refetchQueries(["taskList"], { active: true });
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {
      const { id } = task;
      console.log("task ID:", id);

      // queryClient.invalidateQueries(["task", { id }]);
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

  let minutes = getDualDigital(Math.floor(totalTaskTime / 60));
  let seconds = getDualDigital(totalTaskTime % 60);

  return (
    <Container progressBar={totalTaskTime}>
      <CheckboxWrapper onClick={clickHandler}>
        {task.isCompleted ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </CheckboxWrapper>
      <TextWrapper isCompleted={task.isCompleted}>{task.name}</TextWrapper>

      {task.isCompleted || isTimerPage ? (
        <TimeCounterWrapper>{`${minutes}:${seconds}`}</TimeCounterWrapper>
      ) : (
        <PlayWrapper>
          {/* <a href={`/timer/${task.id}`}> */}
          <Link to="/timer">
            <MdPlayCircleOutline />
          </Link>
          {/* </a> */}
        </PlayWrapper>
      )}
    </Container>
  );
};

const TimeCounterWrapper = styled.div`
  color: #202020;
  margin-left: auto;
  z-index: 1;
  padding-right: 10px;
  font-weight: bold;
  text-decoration: none !important;
`;

const TextWrapper = styled.p<{ isCompleted: boolean }>`
  text-align: left;
  margin: auto 0;
  font-size: 14px;
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "auto")};
  z-index: 1;
`;

const CheckboxWrapper = styled.div`
  padding: 0 1rem;
  font-size: 24px;
  display: flex;
  z-index: 1;
  cursor: pointer;

  > * {
    margin: auto;
  }
`;

const PlayWrapper = styled(CheckboxWrapper)`
  color: #202020;
  margin-left: auto;
  cursor: pointer;
`;

const Container = styled.div<{ progressBar?: number }>`
  position: relative;
  display: inline-flex;
  height: 50px;
  width: 100%;
  border-radius: 8px;
  background: #202020;
  color: white;
  align-items: center;
  margin-bottom: 0.5rem;
  overflow: hidden;
  user-select: none;

  ::before {
    content: "";
    position: absolute;
    right: -7px;
    background: #df6d6d;
    width: calc(
      80px +
        ${({ progressBar }) => (progressBar === undefined ? 0 : progressBar)}px
    );

    height: 70px;
    transform: skewX(-15deg);
    transition: width 0.5s ease-in-out;
  }
`;
