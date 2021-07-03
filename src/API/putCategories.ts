import { API_URL } from "../constants";
import { CategoryType } from "../Types/Category.type";

type putCategoriesProps = {
  categories: CategoryType[];
  id: string | number;
};

export const putCategories = async (data: putCategoriesProps) => {
  const { id } = data;

  const res = await fetch(`${API_URL}/time-lord-projects/${id}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });

  return res.json();
};
