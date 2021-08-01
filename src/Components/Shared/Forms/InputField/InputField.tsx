import * as Styled from "./InputField.styles";
import { InputFieldProps } from "./InputField.types";

export const InputField = ({
  label,
  type,
  register,
  error,
}: InputFieldProps) => {
  return (
    <Styled.FieldWrapper>
      <Styled.Label htmlFor={label}>{label}</Styled.Label>

      {type === "textarea" ? (
        <Styled.Textarea {...register} rows={8} />
      ) : (
        <Styled.Input placeholder={label} type={type} {...register} />
      )}
      {error && <Styled.WarningMessage>{error.message}</Styled.WarningMessage>}
    </Styled.FieldWrapper>
  );
};
