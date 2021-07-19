import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: React.ReactNode;
};

export const Portal = ({ children }: PortalProps) => {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  if (!domReady) return null;
  return createPortal(children, document.body);
};
