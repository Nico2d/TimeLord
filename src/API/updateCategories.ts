import { CategoryType } from "../Components/Categories/Categories/Categories.types";
import { API_URL } from "../constants";

type updateCategoriesProps = {
  categories: CategoryType[];
  id: string | number;
};

export const updateCategories = async (data: updateCategoriesProps) => {
  const res = await fetch(`${API_URL}/time-lord-projects/${data.id}`, {
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
