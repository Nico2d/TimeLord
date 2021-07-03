import { ProjectType } from "./Project.type";

export type TaskType = {
  id: string | number;
  name: string;
  category: string;
  isCompleted: boolean;
  time_lord_project: ProjectType | string | number;
  time: string;
};
