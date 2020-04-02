import React from "react";

// modules
import { Link } from "react-router-dom";

// components
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const AuthenticatedPage = () => {
  return (
    <Container>
      <Typography>You have been authenticated</Typography>

      <Link to="/logout">Log Out</Link>
    </Container>
  );
};

export default AuthenticatedPage;
