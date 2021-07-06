import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../Components/Shared/StyledComponents/StyledButton";
import { StyledInput } from "../Components/Shared/StyledComponents/StyledInput";
import { useSessionContext } from "../Context/SessionContext";
import { useSignInUser } from "../Hooks/useSignInUser.ts/useSignInUser";

export type SignInProps = {
  identifier: string;
  password: string;
};

export const LoginPage = () => {
  const [session, setSession] = useSessionContext();
  const history = useHistory();
  const [mutate] = useSignInUser();

  const handleLogin = () => {
    setSession({ ...session, isAuthenticated: true });
    history.push(session.redirectPath);
  };

  const { register, handleSubmit } = useForm<SignInProps>();

  const onSubmit: SubmitHandler<SignInProps> = async (data) => {
    mutate.mutate(data);

    console.log(mutate.isSuccess);
    handleLogin();
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
