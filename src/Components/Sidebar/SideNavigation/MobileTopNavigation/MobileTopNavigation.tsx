import { IoIosMenu } from "react-icons/io";
import { useMedia } from "react-use";
import { TopNavigation } from "./MobileTopNavigation.styled";
import { MobileTopNavigationProps } from "./MobileTopNavigation.types";

export const MobileTopNavigation = ({
  onMenuClicked,
}: MobileTopNavigationProps) => {
  const isSmartphone = useMedia("(max-width: 460px)");

  if (!isSmartphone) return null;
  return (
    <TopNavigation>
      <p>TimeLord</p>

      <IoIosMenu size="30px" onClick={onMenuClicked} />
    </TopNavigation>
  );
};
