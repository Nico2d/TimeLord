export const useTime = (): {
  countToSeconds: (time: string) => number;
  secondsToString: (totalSeconds: number) => string;
} => {
  const countToSeconds = (time: string) => {
    if (time == null) return 0;

    const [hours, minutes, seconds] = time.split(":");

    return +seconds + 60 * +minutes + 360 * +hours;
  };

  const secondsToString = (totalSeconds: number) => {
    let date = new Date(totalSeconds * 1000);

    return date.toISOString().substr(11, 8);
  };

  return { countToSeconds, secondsToString };
};
