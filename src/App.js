import React, { Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNavigation from "./components/shared/components/Navigation/MainNavigation";
import { AuthContext } from "./components/shared/context/auth-context";
import { useAuth } from "./components/shared/hooks/auth-hook";
import LoadingSpinner from "./components/shared/components/UIElements/LoadingSpinner";

const Users = React.lazy(() => import("./components/user/pages/User"));
const NewPlace = React.lazy(() => import("./components/places/pages/NewPlace"));
const UserPlaces = React.lazy(() =>
  import("./components/places/pages/UserPlaces")
);
const UpdatePlace = React.lazy(() =>
  import("./components/places/pages/UpdatePlace")
);
const Auth = React.lazy(() => import("./components/user/pages/Auth"));

function App() {
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places">
          <UserPlaces />
        </Route>
        <Route path="/places/new">
          <NewPlace />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places">
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
