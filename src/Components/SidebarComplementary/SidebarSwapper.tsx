import { AnimatePresence, motion } from "framer-motion";
import { SidebarComplementary } from "./SidebarComplementary";

type SidebarSwapperProps = {
  isSwappedModal: boolean;
  children: React.ReactNode;
  key: string;
};

export const SidebarSwapper = ({
  isSwappedModal,
  children,
  key,
}: SidebarSwapperProps) => {
  return (
    <AnimatePresence>
      {!isSwappedModal ? (
        <SidebarComplementary>Robisz super robotę mordo</SidebarComplementary>
      ) : (
        <SidebarComplementary width="300px">{children}</SidebarComplementary>
      )}
    </AnimatePresence>
  );
};
