import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { CategoryType } from "../Types/Category.type";
import { TaskType } from "../Types/Task.type";

const categoryList: Array<CategoryType> = [
  { id: "1", name: "Design", color: "#DF6D6D" },
  { id: "2", name: "Bugs", color: "#F9C182" },
  { id: "3", name: "Frontend", color: "#FAFA9A" },
  { id: "4", name: "Backend", color: "#85E099" },
  { id: "5", name: "Testing", color: "#80C8FF" },
  { id: "6", name: "Styles", color: "#BF80FF" },
];

export const useTaskList = (
  projectID?: string
): [
  isLoading: boolean,
  taskList: TaskType[],
  addNewTask: (newTask: TaskType) => void,
  categories: CategoryType[]
] => {
  const [isLoading, setIsLoading] = useState(false);
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchTask = async () => {
      const data = await fetch(`${API_URL}/time-lord-projects/${projectID}`);
      const items = await data.json();

      console.log(items);
      setCategories(items.categories ?? categoryList);
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
