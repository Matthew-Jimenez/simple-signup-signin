import React, { FC } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

interface IRootProps {}

const Root: FC<IRootProps> = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <div>login</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
