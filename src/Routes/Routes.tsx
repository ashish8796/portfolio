import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Components/Header/Header";
import Home from "../Pages/Home";

export default function Routes() {
  return (
    <>
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </>
  );
}
