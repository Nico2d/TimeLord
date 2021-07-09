export const useTime = (
  time: string
): [(time: string) => number, (totalSeconds: number) => string] => {
  const getDualDigital = (number: number) => {
    if (number < 10) return `0${number}`;
    else return number;
  };

  const countToSeconds = (time: string) => {
    if (time == null) {
      return 0;
    }

    const [hours, minutes, seconds] = time.split(":");

    return +seconds + 60 * +minutes + 360 * +hours;
  };

  const secondsToString = (totalSeconds: number) => {
    const seconds = getDualDigital(totalSeconds % 60);
    const minutes = getDualDigital(Math.floor(totalSeconds / 60));
    const hours = getDualDigital(Math.floor(totalSeconds / 360));

    return `${hours}:${minutes}:${seconds}`;
  };

  return [countToSeconds, secondsToString];
};
