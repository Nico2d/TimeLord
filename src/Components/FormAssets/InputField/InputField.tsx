import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { InputFieldProps } from "./InputField.types";
import * as Styled from "./InputField.styles";

export const InputField = ({
  label,
  type,
  register,
  error,
  tip,
  placeholder,
}: InputFieldProps) => {
  return (
    <Styled.FieldWrapper>
      <Styled.Label htmlFor={label}>{label}</Styled.Label>

      {type === "textarea" ? (
        <Styled.Textarea {...register} rows={8} />
      ) : (
        <Styled.Input placeholder={placeholder} type={type} {...register} />
      )}

      {error && (
        <ErrorMessage message={error.message || "To pole jest wymagane"} />
      )}

      {tip && <Styled.TipWrapper>{tip}</Styled.TipWrapper>}
    </Styled.FieldWrapper>
  );
};
