import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeView from "./Home/HomeView";
import SearchUserView from './SearchUser/SearchUserView'
import SearchRepositoryView from './SearchRepository/SearchRepositoryView'

const Main = () => (
  <div>
    <Switch>
      <Route  exact path="/" component={HomeView} />
      <Route  path="/searchUser" component={SearchUserView} />
      <Route  path="/searchRepository" component={SearchRepositoryView} />
    </Switch>
  </div>
);

export default Main;
