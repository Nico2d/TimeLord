import { createContext, useContext, useState } from "react";
import { initialSession, Session } from "../Models/session";

export const SessionContext = createContext<
  [Session, (session: Session) => void]
>([initialSession, () => {}]);

export const useSessionContext = () => useContext(SessionContext);

export const SessionContextProvider: React.FC = ({ children }) => {
  const [sessionState, setSessionState] = useState<Session>(initialSession);
  const defaultSessionContext: [Session, typeof setSessionState] = [
    sessionState,
    setSessionState,
  ];

  return (
    <SessionContext.Provider value={defaultSessionContext}>
      {children}
    </SessionContext.Provider>
  );
};
