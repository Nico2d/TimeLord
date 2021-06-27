import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { TaskType } from "../Types/Task.type";

export const useTaskList = (
  projectID?: string
): [
  isLoading: boolean,
  taskList: TaskType[],
  addNewTask: (newTask: TaskType) => void,
  categories: {}
] => {
  const [isLoading, setIsLoading] = useState(false);
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const fetchTask = async () => {
      const data = await fetch(`${API_URL}/time-lord-projects/${projectID}`);
      const items = await data.json();

      console.log(items);
      setCategories(items.categories);
      setTaskList(items.time_lord_tasks);
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchTask();

    return () => {
      setTaskList([]);
    };
  }, [projectID]);

  const addNewTask = (newTask: TaskType) => {
    const putTask = async (body = {}) => {
      const data = await fetch(`${API_URL}/time-lord-tasks`, {
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
      const items = await data.json();

      return items;
    };

    putTask(newTask);
    setTaskList((taskList) => [...taskList, newTask]);
  };

  return [isLoading, taskList, addNewTask, categories];
};
