import { useContext, useState } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
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

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />

        <Route path="/register">Rejestracja</Route>

        <ProtectedRoute
          {...defaultProtectedRouteProps}
          path="/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute {...defaultProtectedRouteProps} path="/protected">
          Elo tutaj protected route
        </ProtectedRoute>

        {/* <Route exact path="/dashboard">
          <Dashboard />
        </Route> */}
        <Route path="/projects">
          <Dashboard />
        </Route>
        <Route path="/settings">
          <Dashboard />
        </Route>

        <Route path="/timer/:taskId">
          <Timer />
        </Route>

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

//sssssssssssssssssssssssssssssssssssssssssssssssssss

// const fakeAuth = {
//   isAuthenticated: false,

//   signIn(cb: any) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },

//   signOut(cb: any) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   },
// };

// /** For more details on
//  * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
//  * refer to: https://usehooks.com/useAuth/
//  */
// const authContext = createContext();

// function ProvideAuth({ children }: any) {
//   const auth = useProvideAuth();
//   return <authContext.Provider value={auth}>{children}</authContext.Provider>;
// }

// function useAuth() {
//   return useContext(authContext);
// }

// function useProvideAuth() {
//   const [user, setUser] = useState<string>("");

//   const signIn = (cb: any) => {
//     return fakeAuth.signIn(() => {
//       setUser("user");
//       cb();
//     });
//   };

//   const signOut = (cb: any) => {
//     return fakeAuth.signOut(() => {
//       setUser("");
//       cb();
//     });
//   };

//   return {
//     user,
//     signIn: signIn,
//     signOut,
//   };
// }

// function AuthButton() {
//   let history = useHistory();
//   let auth: any = useAuth();

//   return (
//     <>
//       {auth.user ? (
//         <p>
//           Welcome!{" "}
//           <button
//             onClick={() => {
//               auth.signOut(() => history.push("/"));
//             }}
//           >
//             Sign out
//           </button>
//         </p>
//       ) : (
//         <p>You are not logged in.</p>
//       )}
//     </>
//   );
// }

// // A wrapper for <Route> that redirects to the login
// // screen if you're not yet authenticated.
// function PrivateRoute({ children, ...rest }: any) {
//   let auth: any = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth.user ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// function PublicPage() {
//   return <h3>Public</h3>;
// }

// function ProtectedPage() {
//   return <h3>Protected</h3>;
// }

// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();
//   let auth = useAuth();

//   let { from } = location.state || { from: { pathname: "/" } };
//   let login = () => {
//     auth.signin(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }
