import { API_URL } from "../constants";
import { TaskType } from "../Types/Task.type";

export const postTask = async (body: TaskType) => {
  const res = await fetch(`${API_URL}/time-lord-tasks/`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(body),
  });

  return res.json();
};
