import { createContext } from "react";
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
