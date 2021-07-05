import { API_URL } from "../constants";

export const fetchTask = async ({ queryKey }: any) => {
  const [_key, taskID] = queryKey;
  const response = await fetch(`${API_URL}/time-lord-tasks/${taskID}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};
