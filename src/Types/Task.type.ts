import { ProjectType } from "./Project.type";

export type TaskType = {
  id: string;
  name: string;
  category: string;
  isCompleted: boolean;
  time_lord_project: ProjectType | number;
  time: string;
};
