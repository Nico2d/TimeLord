import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Task } from "../Components/Tasks/Task";
import { CountdownContainer } from "../Components/Timer/Countdown/CountdownContainer";
import { TaskType } from "../Types/Task.type";

export const TimerWithoutAuth = () => {
  const [task] = useState<TaskType>({
    name: "Twoje super zadanie",
  } as TaskType);

  return (
    <Container>
      <StyledWrapper>
        <Task task={task} />
      </StyledWrapper>

      <CountdownContainerWrapper>
        <CountdownContainer task={task} />
      </CountdownContainerWrapper>

      <RegisterContainer>
        <Link to="/dashboard">Zaloguj się</Link> aby zapisać swój progress i
        tworzyć super projekty.
      </RegisterContainer>
    </Container>
  );
};

const CountdownContainerWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-flow: column;
`;

const StyledWrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  width: 100%;
  max-width: 800px;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: white;
`;

const RegisterContainer = styled.p`
  margin-top: auto;
  margin-bottom: 2rem;

  a {
    color: #df6d6d;
  }
`;
