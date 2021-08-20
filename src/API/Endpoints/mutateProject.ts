import axiosInst from "../../axiosConfig";
import { IProject, ProjectType } from "../../Types/Project.type";

export const mutateProject = async (project: IProject) => {
  const res = await axiosInst.post<ProjectType>(`/time-lord-projects`, project);

  return res;
};
