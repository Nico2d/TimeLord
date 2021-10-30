import { useEffect, useState } from "react";
import { useDailies } from "../../../../API/Hooks/useDailies";
import { useTime } from "../../../../Hooks/useTime";
import { ProgressCircle } from "../../../Shared/ProgressCircle/ProgressCircle";
import * as Styled from "./DailyProgressCircle.style";

export const DailyProgressCircle = () => {
  const { data, status } = useDailies();
  const [workedHours, setWorkedHours] = useState(0);
  const { secondsToString } = useTime();
  const dailyHoursGoal = 8 * 3600;
  const procent = (workedHours / dailyHoursGoal) * 100;

  useEffect(() => {
    setWorkedHours(data?.data.dailyTimer ?? 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

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
