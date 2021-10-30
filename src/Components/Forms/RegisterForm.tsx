import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { useCreateUser } from "../../API/Hooks/useCreateUser";
import { useFormHelper } from "../../Hooks/useIsAllFieldsFilled/useIsAllFieldsFilled";
import { RegisterType } from "../../Pages/Register";
import { ErrorMessage } from "../FormAssets/ErrorMessage/ErrorMessage";
import { InputField } from "../FormAssets/InputField/InputField";
import { LoadingSpinner } from "../Shared/LoadingSpinner";
import { StyledButton } from "../Shared/StyledComponents/StyledButton";
import * as S from "./Form.styles";

interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const RegisterForm = () => {
  const { mutate, isLoading, isSuccess, error } = useCreateUser();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>({ reValidateMode: "onChange" });

  const { isAllFieldsFilled } = useFormHelper(watch);

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit: SubmitHandler<RegisterType> = async (submitData) => {
    mutate(submitData);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Title>Rejestracja</S.Title>

      <InputField
        label="Username"
        type="text"
        register={{
          ...register("username", {
            required: "Wybierz jakąś super nazwę",
          }),
        }}
        error={errors.username}
      />

      <InputField
        label="Email"
        type="email"
        register={{
          ...register("email", {
            required: "Pole jest wymagane",
          }),
        }}
        error={errors.email}
      />

      <InputField
        label="Hasło"
        type="password"
        register={{
          ...register("password", {
            required: "Pole jest wymagane",
            minLength: {
              value: 8,
              message: "Hasło musi zawierać co najmniej 8 znaków",
            },
          }),
        }}
        placeholder="Hasło musi zawierać co najmniej 8 znaków"
        error={errors.password}
      />

      <InputField
        label="Potwierdź hasło"
        type="password"
        register={{
          ...register("passwordConfirm", {
            required: "Pole jest wymagane",
            validate: (value) =>
              value === password.current || "Hasła nie są zgodne",
          }),
        }}
        error={errors.passwordConfirm}
        placeholder="Wpisz ponownie hasło"
      />

      {error && <ErrorMessage message={error.message} />}
      {isSuccess && (
        <div>
          <span>Gratulacje udało Ci się założyć konto.</span> <br />
          <Link to="/dashboard">Przejdź do głównego panelu</Link>
        </div>
      )}

      <S.FormButtonWrapper>
        <StyledButton type="submit" isFocus={isAllFieldsFilled()}>
          {isLoading ? <LoadingSpinner /> : <span>Załóż konto</span>}
        </StyledButton>
      </S.FormButtonWrapper>

      <div>
        <span>Masz już konto? </span>
        <Link to="/login">Zaloguj się</Link>
      </div>
    </S.Form>
  );
};
