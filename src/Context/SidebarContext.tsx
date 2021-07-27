import React from "react";
import { useContext, useState } from "react";

// export const SidebarContext = createContext<
//   [Session, (session: Session) => void]
// >([initialSession, () => {}]);

export const SidebarContext = React.createContext("hidden");

// export const SidebarContext = () => useContext();

export const SidebarContextProvider = () => {
  const [sidebarVariant, setSidebarVariant] = useState("hidden");
};
