import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import styled from 'styled-components';
import NavSection from "./Sidebar/NavSection"
import Main from './Main'
import HeaderView from './Header/HeaderView'

const MainContainerStyled = styled.div`
display: flex;
justify-content: space-between;
`
const App = () => (
  <BrowserRouter>
      <div className="app">
          <Route component={HeaderView} />
          <MainContainerStyled>
          <Route component={NavSection} />
          <Route path={"/"} component={Main} />
          </MainContainerStyled>
      </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));