import { Route, Switch } from "react-router-dom";

import RegisterPage from "../Pages/Register";
import LoginPage from "../Pages/Login";
import CapturePage from "../Pages/Capture";
import AdminPage from "../Pages/AdminPage";
import TablePage from "../Pages/Table";
import ReleasesPage from "../Pages/Releases";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <CapturePage />
      </Route>

      <Route exact path="/admin">
        <AdminPage />
      </Route>

      <Route exact path="/login">
        <LoginPage />
      </Route>

      <Route exact path="/register">
        <RegisterPage />
      </Route>

      <Route exact path="/table">
        <TablePage />
      </Route>

      <Route exact path='/releases'>
        <ReleasesPage/>
      </Route>

    </Switch>
  );
}
