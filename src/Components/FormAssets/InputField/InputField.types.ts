import { ReactElement } from "react";
import { FieldError } from "react-hook-form";

export type InputFieldProps = {
  label: string;
  type: string;
  register: any;
  error?: FieldError;
  tip?: ReactElement;
  placeholder?: string;
};
