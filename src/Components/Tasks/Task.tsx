import React from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdPlayCircleOutline,
} from "react-icons/md";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { API_URL } from "../../constants";
import { TaskType } from "../../Types/Task.type";
import { useHistory } from "react-router-dom";

type TaskProps = {
  task: TaskType;
  handleComplete: (updatedTask: TaskType) => void;
};

export const Task: React.FC<TaskProps> = ({ task, handleComplete }) => {
  let { path, url } = useRouteMatch();

  console.log("path:", path);
  console.log("url: ", url);

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

  let history = useHistory();

  function handleClick() {
    history.push(`${url}/timer`);
  }

  return (
    <Container isCompleted={task.isCompleted}>
      <CheckboxWrapper onClick={clickHandler}>
        {task.isCompleted ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </CheckboxWrapper>
      <TextWrapper>{task.name}</TextWrapper>
      <PlayWrapper onClick={handleClick}>
        <MdPlayCircleOutline />
      </PlayWrapper>
    </Container>
  );
};

const TextWrapper = styled.p`
  text-align: left;
  margin: auto 0;
  font-size: 14px;
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
