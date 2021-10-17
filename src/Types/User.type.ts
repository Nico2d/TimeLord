import { ProjectType } from "./Project.type";

export type UserType = {
  username: string;
  id: string;
  avatar: {
    url: string | undefined;
  };
  time_lord_projects: ProjectType[];
  time_lord_user_dailies: DailyType[];
};

export interface IUserProps {
  username?: string;
  id: string;
  avatar?: {
    url: string;
  };
  time_lord_projects?: ProjectType[];
  time_lord_user_dailies?: DailyType[];
}

export type DailyType = {
  dailyTimer: number;
  date: string;
};
