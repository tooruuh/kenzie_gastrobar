import { Route, Switch } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import AdminPage from "../Pages/AdminPage";
import RegisterPage from "../Pages/RegisterPage";


export default function Routes() {
  return (
    <Switch>
      {/* a rota / ela essencialmnete vem por ultimo */}
      <Route exact path="/">
    
      </Route>
    
      <Route exact path='/Admin'>
          <AdminPage/>
      </Route>
    
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegisterPage/>
      </Route>
    </Switch>
  )
}

