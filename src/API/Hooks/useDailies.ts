import { useQuery } from "react-query";
import { getMyDailies } from "../Endpoints/getMyDailies";

export const useDailies = (date?: string) => {
  return useQuery("daily", () => getMyDailies(date ?? ""));
};
