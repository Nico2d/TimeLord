import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { signInModel } from "../../API/Models/signIn.model";
import { useFormHelper } from "../../Hooks/useIsAllFieldsFilled/useIsAllFieldsFilled";
import { useSignInUser } from "../../Hooks/useSignInUser.ts/useSignInUser";
import { ErrorMessage } from "../FormAssets/ErrorMessage/ErrorMessage";
import { InputField } from "../FormAssets/InputField/InputField";
import { LoadingSpinner } from "../Shared/LoadingSpinner";
import { StyledButton } from "../Shared/StyledComponents/StyledButton";
import * as S from "./Form.styles";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<signInModel>();
  const { mutate, error, isLoading } = useSignInUser();
  const { isAllFieldsFilled } = useFormHelper(watch);
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const onSubmit: SubmitHandler<signInModel> = async (data) => {
    mutate(data);
  };

  useEffect(() => {
    error && setIsErrorVisible(true);
  }, [error]);

  return (
    <S.Form
      onSubmit={handleSubmit(onSubmit)}
      onChange={() => setIsErrorVisible(false)}
    >
      <S.Title>Zaloguj się </S.Title>

      <InputField
        label="Nazwa użytkownika / e-mail"
        type="text"
        register={{ ...register("identifier", { required: true }) }}
        error={errors.identifier}
      />

      <InputField
        label="Hasło"
        type="password"
        register={{ ...register("password", { required: true }) }}
        error={errors.password}
        tip={<Link to="/forgot-password">Zapomniałeś hasła?</Link>}
      />

      {isErrorVisible && <ErrorMessage message={error?.message || "Error"} />}

      <S.FormButtonWrapper>
        <StyledButton type="submit" isFocus={isAllFieldsFilled()}>
          {isLoading ? <LoadingSpinner /> : <span>Login</span>}
        </StyledButton>
      </S.FormButtonWrapper>

      <div>
        <span>Nie masz konta? </span>
        <Link to="/register">Zarejestruj się</Link>
      </div>
    </S.Form>
  );
};
