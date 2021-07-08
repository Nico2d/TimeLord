import axiosInstance from "../axiosConfig";
import { TaskType } from "../Types/Task.type";

export const fetchTaskList = async (projectID: string) => {
  const res = axiosInstance.get<TaskType[]>(`/time-lord-projects/${projectID}`);

  return res;
};
