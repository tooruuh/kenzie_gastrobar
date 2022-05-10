import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import CapturePage from "../Pages/CapturePage"
import AdminPage from "../Pages/AdminPage";

export default function Routes () {
  return (
    <Switch>
      {/* a rota / ela essencialmnete vem por ultimo */}
        <Route exact path='/'>
          <CapturePage/>
        </Route>
        <Route exact path='/Admin'>
          <AdminPage/>
        </Route>
        
    </Switch>
  )
}
