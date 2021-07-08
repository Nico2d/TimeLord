import { useQuery } from "react-query";
import { TaskType } from "../../Types/Task.type";
import { fetchTaskList } from "../fetchTaskList";

export const useTaskList = (projectID: string): [string, TaskType[]] => {
  const { status, data } = useQuery("taskList", () => fetchTaskList(projectID));

  console.log("useTaskList:", data);

  const taskList = data?.data ?? [];

  return [status, taskList];
};
