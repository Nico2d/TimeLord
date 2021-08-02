import React, { useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useClickAway } from "react-use";
import * as Styled from "./Select.styles";
import { SelectTypes } from "./Select.types";

export const Select: React.FC<SelectTypes> = ({
  optionList,
  register,
  value,
  setValue,
}) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const ref = useRef(null);
  useClickAway(ref, () => setIsHidden(true));

  const hideOptions = () => {
    setIsHidden((isHidden) => !isHidden);
  };

  const selectOption = (categoryName: string) => {
    setValue("category", categoryName);
    setIsHidden(true);
  };

  return (
    <Styled.Container ref={ref}>
      <Styled.HiddenSelect value={value} {...register}>
        {optionList.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </Styled.HiddenSelect>

      <Styled.SelectedValue onClick={hideOptions}>
        {value} {isHidden ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </Styled.SelectedValue>

      <Styled.Options isHidden={isHidden}>
        {optionList.map((item, index) => (
          <li
            key={index}
            value={item.name}
            onClick={() => {
              selectOption(item.name);
            }}
          >
            {item.name}
          </li>
        ))}
      </Styled.Options>
    </Styled.Container>
  );
};
