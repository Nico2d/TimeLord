import { useQuery } from "react-query";
import { CategoryType } from "../../Components/Categories/Categories/Categories.types";
import { TaskType } from "../../Types/Task.type";
import { fetchTaskList } from "../fetchTaskList";

export const useTaskList = (
  projectID: string
): [string, TaskType[], CategoryType[]] => {
  const { status, data } = useQuery(["taskList", projectID], () =>
    fetchTaskList(projectID)
  );
  const taskList: TaskType[] = data?.data.time_lord_tasks ?? [];
  const categories: CategoryType[] = data?.data.categories ?? [];

  return [status, taskList, categories];
};
