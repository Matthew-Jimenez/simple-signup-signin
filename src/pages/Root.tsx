import React, { FC } from "react";

// modules
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import AuthenticatedPage from "./AuthenticatedPage";
import LogIn from "./LogIn";
import Register from "./Register";
import LogOut from "./LogOut";

// containers
import ValidateAuth from "../containers/ValidateAuth";
import RequestPasswordReset from "./RequestPasswordReset";

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

const unsecuredRoutes = [
  { path: "/login", component: LogIn, exact: false },
  { path: "/register", component: Register, exact: false },
  {
    path: "/request-password-reset",
    component: RequestPasswordReset,
    exact: false
  }
];

const securedRoutes = [
  { path: "/", component: AuthenticatedPage, exact: true },
  { path: "/logout", component: LogOut, exact: false }
];

export default Root;
