import { useState, useRef } from "react";
import { PomodoroTimers } from "../Components/Timer/RunningType";
import { TimerState } from "../Types/TimerState.type";

interface useCountdownProps {
  initialState?: number;
  onStart?: () => void;
  onPause?: () => void;
  onFinish?: (timeOnFinish: number) => void;
}

export const useCountdown = ({
  initialState,
  onStart,
  onPause,
  onFinish,
}: useCountdownProps) => {
  const [timer, setTimer] = useState<number>(
    initialState ?? PomodoroTimers.working
  );
  const [countdownState, setCountdownState] = useState<TimerState>(
    TimerState.paused
  );
  const countRef = useRef<any>(null);

  const handleStart = () => {
    setCountdownState(TimerState.running);
    countRef.current = setInterval(() => {
      setTimer((timer) => {
        if (timer === 0) {
          handleFinish(timer);
        }

        return --timer;
      });
    }, 1000);

    onStart && onStart();
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setCountdownState(TimerState.paused);
    onPause && onPause();
  };

  const handleFinish = (timeOnFinish?: number) => {
    console.log("handleFinish");
    onFinish && onFinish(timeOnFinish ?? timer);
    setCountdownState(TimerState.finished);
    clearInterval(countRef.current);
  };

  return {
    timer,
    setTimer,
    countdownState,
    handleStart,
    handlePause,
    handleFinish,
  };
};
