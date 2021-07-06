import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSessionContext } from "../../Context/SessionContext";
import { NoMatch } from "../../Pages/404";
import { Dashboard } from "../../Pages/Dashboard";
import { LandingPage } from "../../Pages/LandingPage";
import { LoginPage } from "../../Pages/LoginPage";
import { Timer } from "../../Pages/Timer";
import { TimerWithoutAuth } from "../../Pages/TimerWithoutAuth";
import ProtectedRoute, { ProtectedRouteProps } from "../Shared/ProtectedRoute";

export const Routing = () => {
  const [sessionContext, updateSessionContext] = useSessionContext();

  const setRedirectPath = (path: string) => {
    updateSessionContext({ ...sessionContext, redirectPath: path });
  };

  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: !!sessionContext.isAuthenticated,
    authenticationPath: "/login",
    redirectPath: sessionContext.redirectPath,
    setRedirectPath: setRedirectPath,
  };

  const timerProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: !!sessionContext.isAuthenticated,
    authenticationPath: "/timer",
    redirectPath: sessionContext.redirectPath,
    setRedirectPath: setRedirectPath,
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register">Rejestracja</Route>

        {/* PROTECTED */}
        <ProtectedRoute
          {...defaultProtectedRouteProps}
          path="/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          {...defaultProtectedRouteProps}
          path="/projects"
          component={Dashboard}
        />

        <ProtectedRoute
          {...defaultProtectedRouteProps}
          path="/projects/:slug"
          component={Dashboard}
        />

        <ProtectedRoute
          {...defaultProtectedRouteProps}
          path="/statistics"
          component={Dashboard}
        />
        <ProtectedRoute
          {...defaultProtectedRouteProps}
          path="/settings"
          component={Dashboard}
        />

        <ProtectedRoute
          {...timerProtectedRouteProps}
          path="/timer/:taskId"
          component={Timer}
        />

        {/* NOT PROTECTED */}
        {/* <Route path="/dashboard/">
          <Dashboard />
        </Route> */}

        {/* <Route path="/projects">
          <Dashboard />
        </Route> */}

        {/* <Route path="/statistics">
          <Dashboard />
        </Route>
        <Route path="/settings">
          <Dashboard />
        </Route> */}

        {/* END NOT PROTECTED */}

        <Route path="/timer/">
          <TimerWithoutAuth />
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
