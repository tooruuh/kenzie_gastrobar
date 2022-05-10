import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
}
