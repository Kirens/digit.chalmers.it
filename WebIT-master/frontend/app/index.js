import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter, Switch, Route} from 'react-router-dom'

/* Components */
import Admin from "./components/pages/Admin"


/* Try to load external project, otherwise fallback to example project. */
try {
  let App = require("./../../app/App");
  boot(App.default);
} catch(e) {
  console.log("Could not load external project. Fallbacking to example project...");
  let App = require("./App");
  boot(App.default);
}


function boot(App) {
  const routes = (
    <Switch>
      <Route exact path="/admin" component={Admin} />
      <Route path="/" component={App} />
    </Switch>
  );

  ReactDOM.render(
    <BrowserRouter>
      {routes}
    </BrowserRouter>
    , document.getElementById("root")
  );
}
