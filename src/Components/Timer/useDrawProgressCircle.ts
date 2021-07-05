export const useDrawProgressCircle = (procent: number) => {
  const radius = 150;
  let radiusOffset = radius + 10;
  let circumference = radius * 2 * Math.PI;
  let circumferenceOffset = circumference - (procent / 100) * circumference;

  return [radius, radiusOffset, circumference, circumferenceOffset];
};
