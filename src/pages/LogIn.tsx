import React, { FC } from "react";

// third party modules
import { Link } from "react-router-dom";

// components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Logo from "components/@ui/Logo";

// containers
import LogInForm from "containers/LogInForm";

interface ILogInProps {}

const LogIn: FC<ILogInProps> = () => {
  return (
    <Box height="100%">
      <Container>
        <Box pt={8} pb={6}>
          <Logo align="center" />

          <Box pt={1} />
          <Typography align="center" color="textSecondary">
            Log into your Appname account.
          </Typography>
        </Box>

        <LogInForm />

        <Box py={1}>
          <Typography color="textSecondary" variant="body1">
            Having trouble remembering your password?
            <Link to="/request-password-reset"> Reset your password</Link>
          </Typography>
        </Box>

        <Box py={1}>
          <Typography color="textSecondary" variant="body1">
            Don't have an account? <Link to="/register">Register</Link> now to
            join the action.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LogIn;
