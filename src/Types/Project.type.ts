import { TaskType } from "./Task.type";

export type ProjectType = {
  id: number;
  name: string;
  time_lord_tasks: Array<TaskType>;
};
