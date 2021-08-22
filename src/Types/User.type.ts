import { ProjectType } from "./Project.type";

export type UserType = {
  username: string;
  id: string;
  avatar: {
    url: string | undefined;
  };
  time_lord_projects: Array<ProjectType>;
};
