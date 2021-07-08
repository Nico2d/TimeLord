import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../Components/Shared/StyledComponents/StyledButton";

export const LandingPage = () => {
  return (
    <>
      <Header>Witaj w TimeKeeper</Header>

      <Header>Tutaj jest landing page w budowie</Header>

      <StyledButton as={Link} to="/dashboard">
        Przejdź do panelu
      </StyledButton>

      <StyledDiv>
        <p>
          Z strony korzysta już X użytkowników, którym udało się wykonać XXX
          zadań z moją pomocą
        </p>
        <p>
          Dzięki metodzie pomodoro i gratyfikacji zwiększ swoją produktywność
          kilkukrotnie
        </p>

        <StyledButton as={Link} to="/timer">
          Zobacz jak to działa
        </StyledButton>
      </StyledDiv>
    </>
  );
};

const Header = styled.h1`
  margin-top: 0;
`;

const StyledDiv = styled.div`
  margin-top: 50px;

  p:last-child {
    margin: 100px;
  }
`;
