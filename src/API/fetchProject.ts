import { API_URL } from "../constants";

export const fetchProject = async (projectID: string) => {
  const res = await fetch(`${API_URL}/time-lord-projects/${projectID}`);

  return res.json();
};
