import { Route, Switch } from "react-router-dom";

import RegisterPage from "../Pages/Register";
import LoginPage from "../Pages/Login";
import CapturePage from "../Pages/Capture"
import AdminPage from "../Pages/AdminPage";
import TablePage from "../Pages/TablePage";

export default function Routes() {
  return (
    <Switch>
      {/* a rota / ela essencialmnete vem por ultimo */}
      <Route exact path="/">
        <CapturePage />
      </Route>

      <Route exact path='/admin'>
        <AdminPage />
      </Route>

      <Route exact path="/login">
        <LoginPage />
      </Route>

      <Route exact path='/Admin'>
        <AdminPage />
      </Route>

      <Route exact path='/TablePage'>
        <TablePage />
      </Route>

    </Switch >
  )
}

