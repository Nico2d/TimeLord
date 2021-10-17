import { useEffect, useState } from "react";
import {
  ISidebarContextTypes,
  SidebarContext,
  SidebarContextInit,
} from "../../../Context/SidebarContext";
import { SidebarComplementary } from "../SidebarComplementary/SidebarComplementary/SidebarComplementary";
import * as Styles from "./SidebarComplementaryContextProvider.styles";
import { SidebarComplementaryContextProviderProps } from "./SidebarComplementaryContextProvider.types";

export const SidebarComplementaryContextProvider = ({
  children,
}: SidebarComplementaryContextProviderProps) => {
  const [projectId, setProjectId] = useState<string>("");
  const [sidebarContent, setSidebarContent] = useState(
    SidebarContextInit.sidebar
  );

  const initValue: ISidebarContextTypes = {
    sidebar: sidebarContent,
    setProjectId: setProjectId,
    setSidebar: (sidebarContent: JSX.Element) =>
      setSidebarContent(sidebarContent),
    restartSidebar: () => {
      setSidebarContent(<SidebarComplementary projectID={projectId} />);
    },
  };

  useEffect(() => {
    setSidebarContent(<SidebarComplementary projectID={projectId} />);
  }, [projectId]);

  return (
    <SidebarContext.Provider value={initValue}>
      <Styles.Container>
        {children}
        {sidebarContent}
      </Styles.Container>
    </SidebarContext.Provider>
  );
};
