import React, { useEffect } from "react";

import logout from "../api/logout";
import clearToken from "../api/clearToken";
import { useState } from "react";
import { Redirect } from "react-router-dom";

const LogOut = () => {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    logout();

    clearToken();

    console.log("made it");

    setComplete(true);
  }, []);

  if (complete) {
    return <Redirect to="/login" />;
  }

  return <div />;
};

export default LogOut;
