import { CategoryType } from "../Components/Categories/Categories/Categories.types";
import { TaskType } from "./Task.type";

export type ProjectType = {
  id: string;
  name: string;
  icon_name: string;
  time_lord_tasks: TaskType[];
  users_permissions_users: string;
  status: string;
  categories: CategoryType[];
  slug: string;
};
