import styled from "styled-components";
import { LoginForm } from "../Components/Forms/LoginForm";
import { Backward } from "../Components/Timer/Backward";

export const LoginPage = () => {
  return (
    <Container>
      <Backward text="Wróć do strony głównej" to="/" />

      <LoginForm />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
