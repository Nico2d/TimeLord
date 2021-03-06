import React from "react";

export type SidebarProps = {
  position?: string;
  width?: string;
  children: React.ReactNode;
  variant?: string;
  isMobile?: boolean;
  onClickAway?: () => void;
};
