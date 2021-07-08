import { useQuery } from "react-query";
import { TaskType } from "../../Types/Task.type";
import { fetchTaskList } from "../fetchTaskList";

export const useTaskList = (projectID: string): [string, TaskType[]] => {
  const { status, data } = useQuery(["taskList", projectID], () =>
    fetchTaskList(projectID)
  );
  const taskList: TaskType[] = data?.data.time_lord_tasks ?? [];

  return [status, taskList];
};
