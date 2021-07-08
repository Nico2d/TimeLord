import axiosInst from "../../axiosConfig";
import { ProjectType } from "../../Types/Project.type";

export const mutateProject = async (project: ProjectType) => {
  const res = await axiosInst.post<ProjectType>(`/time-lord-projects`, project);

  return res;
};
