import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import { updateTaskProps } from "../../../API/updateTask";
import { TaskType } from "../../../Types/Task.type";

export type EditTaskFormProps = {
  task: TaskType;
  updateTask: UseMutateFunction<
    AxiosResponse<any>,
    unknown,
    updateTaskProps,
    unknown
  >;
};

export type EditTaskFormInputs = {
  name: string;
  description: string;
  category: string;
};
