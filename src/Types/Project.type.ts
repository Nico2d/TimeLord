import { CategoryType } from "./Category.type";
import { TaskType } from "./Task.type";

export type ProjectType = {
  id: string | number;
  name: string;
  icon_name: string;
  time_lord_tasks: Array<TaskType>;
  time_lord_users: number;
  status: string;
  categories: CategoryType[];
};
