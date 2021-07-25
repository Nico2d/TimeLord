import { useMedia } from "react-use";
import { Portal } from "../../Shared/Portal/Portal";
import { Sidebar } from "../Sidebar/Sidebar";
import { SidebarSwapperProps } from "./SidebarSwapper.types";

export const SidebarSwapper = ({
  isSwappedModal,
  children,
}: SidebarSwapperProps) => {
  const isSmartphone = useMedia("(max-width: 460px)");

  if (isSmartphone) {
    return null;
  }

  return (
    <Portal targetElementId="sidebarComplementaryPortal">
      {!isSwappedModal ? (
        <Sidebar position="right">Robisz super robotę mordo</Sidebar>
      ) : (
        <Sidebar position="right" width="300px">
          {children}
        </Sidebar>
      )}
    </Portal>
  );
};
