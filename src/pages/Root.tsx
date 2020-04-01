import React, { FC } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import LogIn from "./LogIn";
import Register from "./Register";

const routes = [
  { path: "/", component: LogIn, exact: true },
  { path: "/register", component: Register, exact: false }
];

const Root: FC = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Root;
