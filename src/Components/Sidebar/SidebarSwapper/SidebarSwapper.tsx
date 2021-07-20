import { AnimatePresence } from "framer-motion";
import { SideComplementary } from "../SideComplementary/SideComplementary";
import { SidebarSwapperProps } from "./SidebarSwapper.types";

export const SidebarSwapper = ({
  isSwappedModal,
  children,
}: SidebarSwapperProps) => {
  return (
    <AnimatePresence>
      {!isSwappedModal ? (
        <SideComplementary>Robisz super robotę mordo</SideComplementary>
      ) : (
        <SideComplementary width="300px">{children}</SideComplementary>
      )}
    </AnimatePresence>
  );
};
