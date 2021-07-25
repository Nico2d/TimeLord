import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: React.ReactNode;
  targetElementId?: string;
};

export const Portal = ({ children, targetElementId }: PortalProps) => {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  if (!domReady) return null;
  return createPortal(
    children,
    targetElementId
      ? (document.querySelector(`#${targetElementId}`) as HTMLElement)
      : document.body
  );
};
