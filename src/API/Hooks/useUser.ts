import { useQuery } from "react-query";
import { ProjectType } from "../../Types/Project.type";
import { UserType } from "../../Types/User.type";
import { fetchUser } from "../Endpoints/fetchUser";

type useUserReturnType = {
  status: string;
  user: UserType;
  projectList: ProjectType[];
  getTodayDaily: () => number;
};

export const useUser = (id: string): useUserReturnType => {
  const { status, data } = useQuery("user", () => fetchUser(id));

  const user = data?.data ?? ({} as UserType);
  const projectList: ProjectType[] = data?.data.time_lord_projects ?? [];
  const daily = data?.data.time_lord_user_dailies ?? [];

  const getTodayDaily = () => {
    const today = daily.find((dailyItem) => {
      const today = new Date().toISOString().split("T")[0];

      return today === dailyItem.date;
    });

    return today?.dailyTimer ?? 0;
  };

  return { status, user, projectList, getTodayDaily };
};
