import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

export default function Routes () {
  return (
    <Switch>
      {/* a rota / ela essencialmnete vem por ultimo */}
        <Route exact path='/'>

        </Route>
        
    </Switch>
  )
}
