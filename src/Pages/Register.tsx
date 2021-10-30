import styled from "styled-components";
import { RegisterForm } from "../Components/Forms/RegisterForm";
import { Backward } from "../Components/Timer/Backward";

export type RegisterType = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export const Register = () => {
  return (
    <Container>
      <Backward text="Wróć do strony głównej" to="/" />
      <RegisterForm />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
