import React, { useState } from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdPlayCircleOutline,
} from "react-icons/md";
import styled from "styled-components";
import { TaskType } from "../../../Types/Task.type";

type TaskProps = {
  task: TaskType;
};

export const Task: React.FC<TaskProps> = ({ task }) => {
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);
  const clickHandler = () => {
    setIsCompleted((isCompleted) => !isCompleted);
  };

  return (
    <Container onClick={clickHandler} isCompleted={isCompleted}>
      <CheckboxWrapper>
        {isCompleted ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
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
