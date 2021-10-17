import { UseFormSetValue } from "react-hook-form";
import { EditTaskFormInputs } from "../../../Tasks/EditTaskForm/EditTaskForm.types";

export type SelectTypes = {
  optionList: any[];
  register?: any;
  value: string;
  setValue: UseFormSetValue<EditTaskFormInputs>;
};
