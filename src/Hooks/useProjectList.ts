import { useState } from "react";
import { useQuery } from "react-query";
import { fetchUser } from "../API/Endpoints/fetchUser";
import { ProjectType } from "../Types/Project.type";

export const useProjectList = (
  userID: string
): [Array<ProjectType>, (newProject: ProjectType) => void, string] => {
  const { data, status } = useQuery("user", () => fetchUser(userID));

  const [list, setList] = useState<ProjectType[]>(
    data?.data.time_lord_projects ?? []
  );

  const addToList = (newProject: ProjectType): void => {
    setList((prevProjectList) => [...prevProjectList, newProject]);
  };

  return [list, addToList, status];
};
