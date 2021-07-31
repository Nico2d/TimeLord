import { useState } from "react";
import { SidebarContext } from "../../../Context/SidebarContext";
import { Sidebar } from "../Sidebar/Sidebar";
import * as Styles from "./SidebarComplementaryContextProvider.styles";
import { SidebarComplementaryContextProviderProps } from "./SidebarComplementaryContextProvider.types";

export const SidebarComplementaryContextProvider = ({
  children,
}: SidebarComplementaryContextProviderProps) => {
  const [sidebarContent, setSidebarContent] = useState(
    <Sidebar position="right" width="250px">
      My super sidebar
    </Sidebar>
  );

  const restartSidebar = () => {
    setSidebarContent(
      <Sidebar position="right" width="250px">
        My super sidebar
      </Sidebar>
    );
  };

  const value = {
    sidebar: sidebarContent,
    sidebarType: "disable",
    setSidebar: (sidebarContent: JSX.Element) =>
      setSidebarContent(sidebarContent),
    restartSidebar: restartSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>
      <Styles.Container>
        {children}
        {sidebarContent}
      </Styles.Container>
    </SidebarContext.Provider>
  );
};
