import { UserType } from "../../Types/User.type";

export interface IDailyModel {
  date: string;
  dailyTimer: number;
  user: number | UserType;
}
