import { useState } from "react";
import { useTime } from "../../../../Hooks/useTime";
import { ProgressCircle } from "../../../Shared/ProgressCircle/ProgressCircle";
import * as Styled from "./DailyProgressCircle.style";

export const DailyProgressCircle = () => {
  // wczytać z danych użytkownika:
  const dailyHoursGoal = 8 * 3600;
  const workedHours = 3 * 3600 + 30 * 60;
  const [procent] = useState((workedHours / dailyHoursGoal) * 100);
  const { secondsToString } = useTime();

  return (
    <Styled.DailyProgressCircle>
      <h4>Cel na dzisiaj</h4>
      <Styled.CountdownWrapper>
        <ProgressCircle radius={60} procent={procent} />
        <Styled.Display>{`${procent.toFixed(1)}%`}</Styled.Display>
      </Styled.CountdownWrapper>

      <Styled.DailyProgressInfo>
        Pozostało <b>{secondsToString(dailyHoursGoal - workedHours)}</b>
        <br />
        do spełnienia dziennego celu
      </Styled.DailyProgressInfo>
    </Styled.DailyProgressCircle>
  );
};
