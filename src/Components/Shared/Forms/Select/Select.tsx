import React, { useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useClickAway } from "react-use";
import * as Styled from "./Select.styles";

type SelectTypes = {
  optionList: any[];
  method: (e: string | number) => void;
  defaultValue?: any;
};

export const Select: React.FC<SelectTypes> = ({
  optionList,
  method,
  defaultValue = optionList[0],
}) => {
  const [value, setValue] = useState<any>(defaultValue);
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const ref = useRef(null);
  useClickAway(ref, () => setIsHidden(true));

  const hideOptions = () => {
    setIsHidden(!isHidden);
  };

  const selectOption = (item: any) => {
    setValue(item);
    method(item.name);
    setIsHidden(true);
  };

  return (
    <Styled.Container ref={ref}>
      <Styled.SelectedValue onClick={hideOptions}>
        {value.name} {isHidden ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </Styled.SelectedValue>

      <Styled.Options isHidden={isHidden}>
        {optionList.map((item, index) => {
          return (
            <li
              key={index}
              value={item.name}
              onClick={() => {
                selectOption(item);
              }}
            >
              {item.name}
            </li>
          );
        })}
      </Styled.Options>
    </Styled.Container>
  );
};
