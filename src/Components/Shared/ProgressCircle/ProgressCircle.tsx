import * as Styled from "./ProgressCircle.style";
import { ProgressCircleProps } from "./ProgressCircle.types";

export const ProgressCircle = ({
  radius,
  procent = 100,
}: ProgressCircleProps) => {
  let radiusOffset = radius + 10;
  let circumference = radius * 2 * Math.PI;
  let circumferenceOffset = circumference - (procent / 100) * circumference;

  return (
    <svg width={radiusOffset * 2} height={radiusOffset * 2}>
      <Styled.BackgroundCircle
        fill="transparent"
        r={radius}
        cx={radiusOffset}
        cy={radiusOffset}
        strokeDasharray={`${circumference} ${circumference}`}
      />

      <Styled.StyledCircle
        fill="transparent"
        r={radius}
        cx={radiusOffset}
        cy={radiusOffset}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={circumferenceOffset}
      />
    </svg>
  );
};
