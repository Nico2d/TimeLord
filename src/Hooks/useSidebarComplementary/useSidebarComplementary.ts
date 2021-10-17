import { useState, useContext } from "react";
import { SidebarContext } from "../../Context/SidebarContext";

export const useSidebarComplementary = (): {
  swapSidebarComplementary: (sidebarNode: JSX.Element) => void;
  closeForm: () => void;
  changeProject: (id: string) => void;
} => {
  const [openForm, setOpenForm] = useState(false);
  const { restartSidebar, setSidebar, setProjectId } =
    useContext(SidebarContext);

  const closeForm = () => {
    restartSidebar();
    setOpenForm(false);
  };

  const changeProject = (id: string) => {
    if (id === undefined) return;

    setProjectId(id);
  };

  const swapSidebarComplementary = (sidebarNode: JSX.Element) => {
    if (openForm) {
      closeForm();
    } else {
      setSidebar(sidebarNode);
      setOpenForm(true);
    }
  };

  return { swapSidebarComplementary, closeForm, changeProject };
};
