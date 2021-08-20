import { createContext } from "react";
import { SidebarComplementary } from "../Components/Sidebar/SidebarComplementary/SidebarComplementary/SidebarComplementary";

export interface ISidebarContextTypes {
  sidebar: JSX.Element | null;
  setSidebar: (sidebarContent: JSX.Element) => void;
  restartSidebar: (projectID?: string | undefined) => void;
  setProjectId: (value: string) => void;
}

export const SidebarContextInit: ISidebarContextTypes = {
  sidebar: <SidebarComplementary />,
  setSidebar: () => {},
  restartSidebar: () => {},
  setProjectId: () => {},
};

export const SidebarContext =
  createContext<ISidebarContextTypes>(SidebarContextInit);
