import React, { FC } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import LogIn from "./LogIn";

const Root: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LogIn} />
    </Switch>
  </BrowserRouter>
);

export default Root;
