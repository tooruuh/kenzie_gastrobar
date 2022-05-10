import { Route, Switch } from "react-router-dom";

import LoginPage from "../Pages/LoginPage";
import CapturePage from "../Pages/CapturePage"
import AdminPage from "../Pages/AdminPage";

export default function Routes() {
  return (
    <Switch>
      {/* a rota / ela essencialmnete vem por ultimo */}
      <Route exact path="/">
        <CapturePage/>
      </Route>
    
      <Route exact path='/admin'>
          <AdminPage/>
      </Route>
    
      <Route exact path="/login">
        <LoginPage />
      </Route>
    </Switch>
  )
}

