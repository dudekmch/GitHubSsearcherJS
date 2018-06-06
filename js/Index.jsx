import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import NavSection from "./Sidebar/NavSection"
import Main from './Main'

const App = () => (
  <BrowserRouter>
      <div className="app">
          <Route component={NavSection} />
          <Route path={"/"} component={Main} />
      </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));