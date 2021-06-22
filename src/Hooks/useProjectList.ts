import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { ProjectType } from "../Types/Project.type";

export const useProjectList = (
  userID: number
): [Array<ProjectType>, (newProject: ProjectType) => void] => {
  const [list, setList] = useState<ProjectType[]>([]);

  useEffect(() => {
    axios.get(`${API_URL}/time-lord-users/${userID}`).then((res) => {
      const projectList = res.data.time_lord_projects;
      setList(projectList);
    });
  }, [userID]);

  const addToList = (newProject: ProjectType): void => {
    setList((prevProjectList) => [...prevProjectList, newProject]);
  };

  return [list, addToList];
};
