import instanceAxios from "../../axiosConfig";
import { IDailyModel } from "../Models/daily";

export const getMyDailies = async (date?: string) => {
  return await instanceAxios.get<IDailyModel>(
    `/time-lord-user-dailies/${date}`
  );
};
