import { ProjectType } from "./Project.type";

export type UserType = {
  username: string;
  avatar: {
    url: string;
  };
  time_lord_projects: Array<ProjectType>
};
