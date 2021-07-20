import { PositionTypes, TooltipProps } from "./Tooltip.types";
import * as Styled from "./Tooltip.styles";
import { useState, cloneElement } from "react";
import { Portal } from "../../Shared/Portal/Portal";

export const Tooltip = ({ text, children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<PositionTypes>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const onMouseOutHandler = () => setIsVisible(false);

  const onMouseOverHandler = (e: Event) => {
    const element: Element = e.currentTarget as Element;
    const position = element.getBoundingClientRect();

    setPosition(position);
    setIsVisible(true);
  };

  return (
    <>
      {cloneElement(children as React.ReactElement<any>, {
        onMouseOver: onMouseOverHandler,
        onMouseOut: onMouseOutHandler,
      })}

      <Portal>
        <Styled.Tooltip isVisible={isVisible} position={position}>
          {text}
        </Styled.Tooltip>
      </Portal>
    </>
  );
};
