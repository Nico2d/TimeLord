import { useEffect } from "react";
import { Redirect, Route, RouteProps, useLocation } from "react-router";
import { useLocalStorage } from "react-use";

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  redirectPath: string;
  setRedirectPath: (path: string) => void;
} & RouteProps;

export default function ProtectedRoute({
  isAuthenticated,
  authenticationPath,
  redirectPath,
  setRedirectPath,
  ...routeProps
}: ProtectedRouteProps) {
  const currentLocation = useLocation();
  const [value] = useLocalStorage("token");

  isAuthenticated = !(value === undefined || value === "");

  console.log("ProtectedRoute [Auth]: ", isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      setRedirectPath(currentLocation.pathname);
    }
  }, [isAuthenticated, setRedirectPath, currentLocation]);

  if (isAuthenticated && routeProps.path === currentLocation.pathname) {
    console.log("im auth");
    return <Route {...routeProps} />;
  } else {
    console.log("im not auth");
    return (
      <Redirect
        to={{ pathname: isAuthenticated ? redirectPath : authenticationPath }}
      />
    );
  }
}
