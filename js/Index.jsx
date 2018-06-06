import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavSection from './sidebar/NavSection'

const App = () => (
  <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={NavSection} />
        </Switch>
      </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));