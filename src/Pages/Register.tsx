import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCreateUser } from "../API/Hooks/useCreateUser";
import { ErrorMessage } from "../Components/Shared/ErrorMessage";
import { StyledButton } from "../Components/Shared/StyledComponents/StyledButton";
import { StyledInput } from "../Components/Shared/StyledComponents/StyledInput";

export type RegisterType = {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export const Register = () => {
  const [mutate] = useCreateUser();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit: SubmitHandler<RegisterType> = async (submitData) => {
    mutate.mutate(submitData);
  };

  const isAllFieldsFilled = () => {
    let isAllFieldsFilled = true;
    const watchAllFields = Object.values(watch());

    if (watchAllFields.length === 0) {
      return false;
    }

    watchAllFields.forEach((item: String) => {
      if (item === "") {
        isAllFieldsFilled = false;
      }
    });

    return isAllFieldsFilled;
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Rejestracja</h1>
      <StyledInput
        type="text"
        {...register("username", { required: true })}
        placeholder="Nazwa użytkownika"
      />
      {errors.username && <ErrorMessage message="Wybierz jakąś super nazwę" />}

      <StyledInput
        type="email"
        {...register("email", { required: true })}
        placeholder="E-mail"
      />
      {errors.email && <ErrorMessage message="Pole jest wymagane" />}
      <StyledInput
        type="password"
        {...register("password", {
          required: true,
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters",
          },
        })}
        placeholder="Hasło"
      />
      {errors.password && (
        <ErrorMessage message="Hasło musi mieć minimum 8 znaków" />
      )}

      <StyledInput
        type="password"
        {...register("repeatPassword", {
          required: true,
          validate: (value) =>
            value === password.current || "The passwords do not match",
        })}
        placeholder="Powtórz hasło"
      />
      {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}

      <StyledButton type="submit" isFocus={isAllFieldsFilled()}>
        Załóż konto
      </StyledButton>

      {mutate.isError && (
        <ErrorMessage message="Niestety nie udało się utworzyć nowego konta. Spróbuj z innym e-mailem" />
      )}
      {mutate.isSuccess && (
        <div>
          Gratulacje udało Ci się założyć konto.
          {/* <Link to="/dashboard">Przejdź do serwisu</Link> */}
        </div>
      )}

      <p>
        Masz już konto? <Link to="/login">Zaloguj się</Link>
      </p>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 300px;
  margin: auto;

  * {
    margin-bottom: 1rem;
  }
`;
