import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import HomeView from "./Home/HomeView";
import SearchUserView from './SearchUser/SearchUserView'
import SearchRepositoryView from './SearchRepository/SearchRepositoryView'

const MainContentContainerStyled = styled.div`
flex-basis: 80%;
`

const Main = () => (
  <MainContentContainerStyled>
    <Switch>
      <Route  exact path="/" component={HomeView} />
      <Route  path="/searchUser" component={SearchUserView} />
      <Route  path="/searchRepository" component={SearchRepositoryView} />
    </Switch>
  </MainContentContainerStyled>
);

export default Main;
