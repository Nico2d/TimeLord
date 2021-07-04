import { API_URL } from "../constants";

type updateTaskProps = {
  id: string | number;
  isCompleted: boolean;
};

export const updateTask = async (task: updateTaskProps) => {
  const res = await fetch(`${API_URL}/time-lord-tasks/${task.id}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(task),
  });

  return res.json();
};
