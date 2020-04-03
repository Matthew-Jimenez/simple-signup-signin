import React, { FC, useEffect, useState, useCallback } from "react";
import { Redirect } from "react-router-dom";
import hydrateUser from "../api/hydrateUser";

interface IAuthenticateProps {}

const ValidateAuth: FC<IAuthenticateProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [sessionFound, setSessionFound] = useState(false);

  const runHydrateUser = useCallback(async () => {
    const found = await hydrateUser();

    if (found) {
      setSessionFound(true);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    runHydrateUser();
  }, [runHydrateUser]);

  if (loading) {
    return <div />;
  }

  if (!sessionFound) {
    return <Redirect to="/login" />;
  }

  return <>{children}</>;
};

export default ValidateAuth;
