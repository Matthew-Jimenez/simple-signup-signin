import React, { FC } from "react";

// third party modules
import { Link } from "react-router-dom";

// components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

// containers
import LogInForm from "containers/LogInForm";

interface ILogInProps {}

const LogIn: FC<ILogInProps> = () => {
  return (
    <Container>
      <Box pt={3}>
        <Typography variant="h1">Log In</Typography>
      </Box>

      <LogInForm />

      <Box py={1}>
        <Typography variant="body1">
          Don't have an account? <Link to="/register">Register</Link> now to
          join the action.
        </Typography>
      </Box>
    </Container>
  );
};

export default LogIn;
