import axiosInstance from "../axiosConfig";
import { ProjectType } from "../Types/Project.type";

export const fetchTaskList = async (projectID: string) => {
  const res = axiosInstance.get<ProjectType>(
    `/time-lord-projects/${projectID}`
  );

  return res;
};
