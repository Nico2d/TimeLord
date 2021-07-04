import { API_URL } from "../constants";

export const fetchTaskList = async (projectID: string) => {
  const res = await fetch(`${API_URL}/time-lord-projects/${projectID}`);
  const data = await res.json();

  return data.time_lord_tasks;
};
