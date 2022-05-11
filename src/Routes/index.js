import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import AdminPage from "../Pages/AdminPage";
import TablePage from "../Pages/TablePage";

export default function Routes () {
  return (
    <Switch>
      {/* a rota / ela essencialmnete vem por ultimo */}
        <Route exact path='/'>

        </Route>
        <Route exact path='/Admin'>
          <AdminPage/>
        </Route>

        <Route exact path='/TablePage'>
          <TablePage />
        </Route>
        
    </Switch>
  )
}
