import React from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdPlayCircleOutline,
} from "react-icons/md";
import styled from "styled-components";
import { API_URL } from "../../../constants";
import { TaskType } from "../../../Types/Task.type";

type TaskProps = {
  task: TaskType;
  handleComplete: (updatedTask: TaskType) => void;
};

export const Task: React.FC<TaskProps> = ({ task, handleComplete }) => {
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

  return (
    <Container onClick={clickHandler} isCompleted={task.isCompleted}>
      <CheckboxWrapper>
        {task.isCompleted ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </CheckboxWrapper>
      <p>{task.name}</p>
      <PlayWrapper>
        <MdPlayCircleOutline />
      </PlayWrapper>
    </Container>
  );
};

const CheckboxWrapper = styled.div`
  padding: 0 1rem;
  font-size: 24px;
  display: flex;
  z-index: 1;

  > * {
    margin: auto;
  }
`;

const PlayWrapper = styled(CheckboxWrapper)`
  color: #202020;
  margin-left: auto;
`;

const Container = styled.div<{ isCompleted: boolean }>`
  position: relative;
  display: inline-flex;
  height: 50px;
  width: 100%;
  border-radius: 8px;
  background: #202020;
  color: white;
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "auto")};
  align-items: center;
  margin-bottom: 0.5rem;
  cursor: pointer;
  overflow: hidden;
  user-select: none;

  ::before {
    content: "";
    position: absolute;
    right: -7px;
    background: #df6d6d;
    width: 70px;
    height: 70px;
    border-radius: 35px;
  }
`;
