import { useQuery } from "react-query";
import { CategoryType } from "../../Components/Categories/Categories/Categories.types";
import { TaskType } from "../../Types/Task.type";
import { UserType } from "../../Types/User.type";
import { fetchTaskList } from "../fetchTaskList";

type useTaskListReturn = {
  taskList: TaskType[];
  status: string;
  categoriesList: CategoryType[];
  permissionUserList: UserType[];
};

export const useTaskList = (projectID: string): useTaskListReturn => {
  const { status, data } = useQuery(["taskList", projectID], () =>
    fetchTaskList(projectID)
  );
  const taskList: TaskType[] = data?.data.time_lord_tasks ?? [];
  const categoriesList: CategoryType[] = [...(data?.data.categories ?? [])];
  const permissionUserList: UserType[] =
    data?.data.users_permissions_users ?? [];

  return { taskList, status, categoriesList, permissionUserList };
};
