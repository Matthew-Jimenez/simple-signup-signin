import React, { FC } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import AuthenticatedPage from "./AuthenticatedPage";
import LogIn from "./LogIn";
import Register from "./Register";
import ValidateAuth from "../containers/ValidateAuth";
import LogOut from "./LogOut";

const unsecuredRoutes = [
  { path: "/login", component: LogIn, exact: false },
  { path: "/register", component: Register, exact: false }
];

const securedRoutes = [
  { path: "/", component: AuthenticatedPage, exact: true },
  { path: "/logout", component: LogOut, exact: false }
];

const Root: FC = () => (
  <BrowserRouter>
    <Switch>
      {unsecuredRoutes.map(route => (
        <Route key={route.path} {...route} />
      ))}

      <ValidateAuth>
        {securedRoutes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </ValidateAuth>
    </Switch>
  </BrowserRouter>
);

export default Root;
