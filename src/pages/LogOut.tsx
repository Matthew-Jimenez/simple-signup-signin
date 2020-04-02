import React, { useEffect, useState } from "react";

// modules
import { Redirect } from "react-router-dom";

// api
import logout from "../api/logout";
import clearToken from "../api/clearToken";

const LogOut = () => {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    logout();

    clearToken();

    setComplete(true);
  }, []);

  if (complete) {
    return <Redirect to="/login" />;
  }

  return <></>;
};

export default LogOut;
