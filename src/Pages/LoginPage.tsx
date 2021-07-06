import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../Components/Shared/StyledComponents/StyledButton";
import { StyledInput } from "../Components/Shared/StyledComponents/StyledInput";
import { useSignInUser } from "../Hooks/useSignInUser.ts/useSignInUser";

export type SignInProps = {
  identifier: string;
  password: string;
};

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<SignInProps>();
  const [mutate] = useSignInUser();

  const onSubmit: SubmitHandler<SignInProps> = async (data) => {
    mutate.mutate(data);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        Zaloguj się
        <StyledInput
          type="text"
          {...register("identifier", { required: true })}
          value="test@test.pl"
        />
        <StyledInput
          type="password"
          {...register("password", { required: true })}
          value="test123"
        />
        <div>
          <StyledButton type="submit">Login</StyledButton>
        </div>
      </StyledForm>
      <Link to="/">Wróć do strony głównej</Link>
      <Link to="/register">Zarejestruj się</Link>
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  width: 300px;
  margin: auto;
`;
