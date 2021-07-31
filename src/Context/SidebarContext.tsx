import { createContext, useContext } from "react";
import { Sidebar } from "../Components/Sidebar/Sidebar/Sidebar";

type SidebarContextTypes = {
  sidebar: JSX.Element | null;
  sidebarType: string;
  setSidebar: (sidebarContent: JSX.Element) => void;
  restartSidebar: () => void;
};

const SidebarContextInit = {
  sidebar: (
    <Sidebar position="right" width="300px">
      My super sidebar
    </Sidebar>
  ),
  sidebarType: "disable",
  setSidebar: () => {},
  restartSidebar: () => {},
};

export const SidebarContext =
  createContext<SidebarContextTypes>(SidebarContextInit);

export const useSidebarComplementary = () => {
  const context = useContext(SidebarContext);

  if (context === undefined) {
    throw new Error("useSidebarComplementary must be nested in PersonProvider");
  }

  return context;
};
