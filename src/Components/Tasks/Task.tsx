import React from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdPlayCircleOutline,
} from "react-icons/md";
import styled from "styled-components";
import { API_URL } from "../../constants";
import { TaskType } from "../../Types/Task.type";
import { useLocation } from "react-router-dom";
import { getDualDigital } from "../../Utils/getDualDigital";
import { useTime } from "../../Hooks/useTime";

type TaskProps = {
  task: TaskType;
  handleComplete: (updatedTask: TaskType) => void;
  totalTaskTime?: number;
};

export const Task: React.FC<TaskProps> = ({
  task,
  handleComplete,
  totalTaskTime = 0,
}) => {
  const location = useLocation();
  const isTimerPage = location.pathname.split("/")[1] === "timer";
  const [countToSeconds] = useTime("");

  const clickHandler = () => {
    const body = { isCompleted: !task.isCompleted };

    fetch(`${API_URL}/time-lord-tasks/${task.id}`, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error("Error:", error);
      });

    task.isCompleted = !task.isCompleted;

    handleComplete(task);
  };

  if (!isTimerPage) {
    totalTaskTime = countToSeconds(task.time);
  }

  let minutes = getDualDigital(Math.floor(totalTaskTime / 60));
  let seconds = getDualDigital(totalTaskTime % 60);

  return (
    <Container>
      <CheckboxWrapper onClick={clickHandler}>
        {task.isCompleted ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </CheckboxWrapper>
      <TextWrapper isCompleted={task.isCompleted}>{task.name}</TextWrapper>

      {task.isCompleted || isTimerPage ? (
        <TimeCounterWrapper>{`${minutes}:${seconds}h`}</TimeCounterWrapper>
      ) : (
        <PlayWrapper>
          <a href={`/timer/${task.id}`}>
            <MdPlayCircleOutline />
          </a>
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

const Container = styled.div`
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
    width: calc(80px + 0%);
    height: 70px;
    transform: skewX(-15deg);
  }
`;
