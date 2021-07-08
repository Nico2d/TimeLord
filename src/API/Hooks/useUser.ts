import { useQuery } from "react-query";
import { ProjectType } from "../../Types/Project.type";
import { UserType } from "../../Types/User.type";
import { fetchUser } from "../Endpoints/fetchUser";

export const useUser = (id: string): [string, UserType, ProjectType[]] => {
  const { status, data } = useQuery("user", () => fetchUser(id));

  const user = data?.data ?? ({} as UserType);
  const projectList: ProjectType[] = data?.data.time_lord_projects ?? [];

  return [status, user, projectList];
};
