import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./components/user/pages/User";
import NewPlace from "./components/places/pages/NewPlace";
import UserPlaces from "./components/places/pages/UserPlaces";
import MainNavigation from "./components/shared/components/Navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/places/new">
            <NewPlace />
          </Route>
          <Route path="/:userId/places">
            <UserPlaces />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
