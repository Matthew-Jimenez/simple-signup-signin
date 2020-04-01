import React, { FC } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import LogIn from "./LogIn";

const routes = [{ path: "/", component: LogIn, exact: true }];

const Root: FC = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(route => (
        <Route {...route} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Root;
