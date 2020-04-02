import React, { FC } from "react";

// third party modules
import { Link } from "react-router-dom";

// containers
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import LogInForm from "../containers/LogInForm";
import Box from "@material-ui/core/Box";

interface ILogInProps {}

const LogIn: FC<ILogInProps> = props => {
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
