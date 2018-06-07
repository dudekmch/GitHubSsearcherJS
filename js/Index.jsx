import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import styled from 'styled-components';
import NavSection from "./Sidebar/NavSection"
import Main from './Main'
import HeaderView from './Header/HeaderView'

const MainContainerStyled = styled.div`
width: 980px;
margin-right: auto;
margin-left: auto;
display: flex;
justify-content: space-around;
align-items: flex-start;
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